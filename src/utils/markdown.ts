import fs from 'fs';
import path from 'path';

export interface MarkdownPost {
  slug: string;
  title: string;
  lastUpdated: string;
  version: string;
  appName: string;
  content: string;
  htmlContent: string;
}

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers (H3, H2, H1)
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-10 mb-6">$1</h1>');

  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>');

  // Bullet points
  html = html.replace(/^\* (.*?)$/gm, '<li class="ml-6 list-disc text-zinc-600 dark:text-zinc-400 my-1.5">$1</li>');
  html = html.replace(/^- (.*?)$/gm, '<li class="ml-6 list-disc text-zinc-600 dark:text-zinc-400 my-1.5">$1</li>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-zinc-200 dark:border-zinc-800" />');

  // Process paragraphs for non-structural lines
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    
    // Check if it already has block-level tags
    if (
      trimmed.startsWith('<h') || 
      trimmed.startsWith('<li') || 
      trimmed.startsWith('<hr') || 
      trimmed.startsWith('<ul') || 
      trimmed.startsWith('<ol')
    ) {
      return line;
    }
    
    return `<p class="text-zinc-700 dark:text-zinc-400 leading-relaxed my-4">${line}</p>`;
  });

  return processedLines.join('\n');
}

export function getPrivacyPolicyBySlug(slug: string): MarkdownPost {
  const filePath = path.join(process.cwd(), 'src/content/privacy', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter (delimited by ---)
  const frontmatterRegex = /^---([\s\S]*?)---/;
  const match = fileContent.match(frontmatterRegex);
  
  let metadata: Record<string, string> = {};
  let content = fileContent;

  if (match) {
    const frontmatterString = match[1];
    content = fileContent.replace(frontmatterRegex, '').trim();
    
    frontmatterString.split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim().replace(/^['"]|['"]$/g, '');
        metadata[key] = value;
      }
    });
  }

  const htmlContent = markdownToHtml(content);

  return {
    slug,
    title: metadata.title || 'Privacy Policy',
    lastUpdated: metadata.lastUpdated || '',
    version: metadata.version || '1.0',
    appName: metadata.appName || 'App',
    content: content,
    htmlContent: htmlContent,
  };
}

export function getAllPrivacyPolicySlugs(): string[] {
  const dirPath = path.join(process.cwd(), 'src/content/privacy');
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}
