# Premium Mobile Developer Portfolio & Privacy Policy Hub

A premium, modern, clean, minimal, and high-performance developer portfolio website for **Utsav Jetani** (Mobile App Developer | iOS & Android App Creator), optimized for GitHub Pages.

**Live Website:** [https://utsavjetani95.github.io/](https://utsavjetani95.github.io/)

---

## 🌟 Key Features

1. **Premium Hero Section**: Captivating Apple/Linear-inspired headline copy, smooth animations, and clean CTA navigation.
2. **Interactive Showcase**: Live, interactive mobile device screen simulators rendered entirely in Tailwind CSS showing TV Remote, Productivity, Expense, Utilities, and AI Chat interfaces.
3. **Privacy Policy Hub**: Reusable templates and dedicated compliance privacy policy subpages (GDPR / DPDP Act 2023 compliant) for all apps—fulfilling Play Store and App Store submission requirements.
4. **Theme Toggling**: System-first detection with persistent theme toggling and FOUC (Flash of Unstyled Content) prevention script.
5. **SEO & Sitemap Optimized**: Full semantic HTML, OpenGraph social tags, dynamic `robots.txt`, and XML `sitemap.xml` generated automatically at build time.
6. **Ultra Performance**: Lightweight build with zero heavy JS dependencies, leading to fast loading and a high Lighthouse score.

---

## 🛠 Tech Stack

* **Framework**: Next.js 16 (React 19)
* **Styling**: Tailwind CSS v4 (Modern PostCSS configuration)
* **Animations**: Framer Motion
* **Icons**: Lucide React & Custom inline SVGs
* **Parser**: Zero-dependency build-time frontmatter and markdown parser

---

## 📂 Project Structure

```text
├── .github/workflows/    # GitHub Actions CI/CD deployment pipeline
│   └── deploy.yml
├── src/
│   ├── app/              # Next.js App Router (Pages, sitemap, robots)
│   │   ├── apps/
│   │   │   └── [id]/     # Dynamic App Showcase subpages
│   │   ├── privacy-policy/
│   │   │   └── [id]/     # Dynamic compliance privacy policy pages
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/       # Reusable layout, navigation & PhoneMockup components
│   ├── content/privacy/  # Privacy Policy markdown compliance files
│   ├── data/             # App data structures & FAQ contents
│   └── utils/            # Markdown parsing helpers
└── next.config.ts        # Next.js configuration for Static HTML Export
```

---

## 💻 Local Development Setup

To run this project locally, clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 🚀 Build & Static Export

To test the production build and verify the static HTML export directory (`/out`):

```bash
# Build & generate static files
npm run build
```

This compiles all files and outputs them into the `out/` folder, ready to be served by any static host.

---

## 🚢 Continuous Deployment (GitHub Actions)

Deployments are fully automated. When code is pushed to the `main` branch, the workflow inside `.github/workflows/deploy.yml` triggers automatically:

1. Checks out the source code.
2. Installs dependencies using `npm ci`.
3. Runs the Next.js static build (`npm run build`).
4. Configures and deploys the static files from the `out/` folder directly to GitHub Pages.

### Manual GitHub Repository Action Steps (First Time Setup)
1. Ensure your repository is named `UtsavJetani95.github.io` on GitHub.
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your commits to `main` and check the **Actions** tab to watch your deployment deploy live.
