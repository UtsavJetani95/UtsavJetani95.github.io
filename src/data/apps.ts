export interface AppScreenshotUi {
  type: 'remote' | 'productivity' | 'expense' | 'utility' | 'chat';
  data: any;
}

export interface App {
  id: string;
  name: string;
  category: 'TV Remote Apps' | 'Productivity Apps' | 'Expense Apps' | 'Utility Apps' | 'AI Apps';
  tagline: string;
  description: string;
  iconName: string; // Used to select Lucide icons dynamically
  features: string[];
  uiMockup: AppScreenshotUi;
  storeLinks: {
    appStore?: string;
    playStore?: string;
  };
  faq: { question: string; answer: string }[];
  supportEmail: string;
  privacyPath: string;
}

export const appsData: App[] = [
  {
    id: "android-tv-remote",
    name: "Android TV Remote",
    category: "TV Remote Apps",
    tagline: "Control and cast to your Smart TV over local Wi-Fi with ease.",
    description: "The ultimate companion app for your Android TV. Featuring a fluid trackpad, direct keyboard typing, and instant connectivity, it removes the frustration of typing searches character by character using physical remotes. Privacy-first, lightweight, and requires no registration.",
    iconName: "Tv",
    features: [
      "Auto-discovery of smart TVs on your Wi-Fi network",
      "Interactive multi-gesture touchpad and D-pad",
      "Direct keyboard input for rapid searches",
      "Quick app launcher for shortcuts",
      "Zero background data tracking"
    ],
    uiMockup: {
      type: "remote",
      data: {
        tvName: "Living Room TV",
        status: "Connected"
      }
    },
    storeLinks: {
      appStore: "https://apps.apple.com/app/android-tv-remote/id123456",
      playStore: "https://play.google.com/store/apps/details?id=com.utsavjetani.androidtvremote"
    },
    faq: [
      {
        question: "How does the remote connect to my Android TV?",
        answer: "It uses local Wi-Fi. Ensure both your smartphone and your Android TV are connected to the exact same Wi-Fi router. The app will search and discover your TV automatically."
      },
      {
        question: "Does the app require an internet connection?",
        answer: "No, the remote works entirely within your local network (LAN). No internet access is required to control your TV."
      },
      {
        question: "What should I do if my TV isn't discovered?",
        answer: "Make sure Wi-Fi is enabled on both devices and check that local network permissions are granted to the app. Restarting the app or TV can also refresh connection states."
      }
    ],
    supportEmail: "utsavjetani95@gmail.com",
    privacyPath: "/privacy-policy/android-tv-remote"
  },
  {
    id: "focusflow",
    name: "FocusFlow",
    category: "Productivity Apps",
    tagline: "Minimalist Pomodoro timer & ambient soundscapes for deep flow.",
    description: "Designed for developers, writers, and designers. FocusFlow combines a distraction-free Pomodoro timer with hand-crafted ambient audio environments (Rain, Office, Cafe, Train) to help you get in the zone and stay there. Offline-first and ad-free.",
    iconName: "Timer",
    features: [
      "Customizable work, short break, and long break intervals",
      "High-fidelity background atmospheric loops",
      "Offline-first session analytics and history logs",
      "Distraction-free mode with auto-hiding interface controls",
      "Beautiful widget integrations for home screen"
    ],
    uiMockup: {
      type: "productivity",
      data: {
        timer: "24:59",
        phase: "Focus Session",
        sound: "Cozy Rain"
      }
    },
    storeLinks: {
      appStore: "https://apps.apple.com/app/focusflow/id123457",
      playStore: "https://play.google.com/store/apps/details?id=com.utsavjetani.focusflow"
    },
    faq: [
      {
        question: "Are my focus stats synced to any server?",
        answer: "No, all statistics and logs are kept strictly on your device database. We respect your privacy and don't maintain accounts."
      },
      {
        question: "Can I use the app offline?",
        answer: "Yes, all audio loops and timer systems are pre-installed. The app works perfectly on flights or locations without internet."
      }
    ],
    supportEmail: "utsavjetani95@gmail.com",
    privacyPath: "/privacy-policy/focusflow"
  },
  {
    id: "spendwise",
    name: "SpendWise",
    category: "Expense Apps",
    tagline: "Beautifully simple expense manager that respects your data.",
    description: "An offline personal finance manager built to log transactions in under 3 seconds. Visualize category breakdowns, set monthly budgets, and track saving trends without giving away your banking login details.",
    iconName: "Wallet",
    features: [
      "Superfast transaction entry with quick tags",
      "Elegant interactive category breakdown charts",
      "Multi-currency support with custom exchange rates",
      "Secure backups with Google Drive or iCloud sync",
      "No bank login credentials required"
    ],
    uiMockup: {
      type: "expense",
      data: {
        balance: "$1,420.50",
        expenses: [
          { category: "Food", amount: "-$12.50", desc: "Supermarket" },
          { category: "Sub", amount: "-$14.99", desc: "SaaS Subscription" },
          { category: "Transport", amount: "-$25.00", desc: "Fuel" }
        ]
      }
    },
    storeLinks: {
      appStore: "https://apps.apple.com/app/spendwise/id123458"
    },
    faq: [
      {
        question: "Is my bank details requested?",
        answer: "Never. We believe in manual logging or simple CSV imports. We do not ask for or connect to your bank accounts, ensuring your money stays private."
      },
      {
        question: "Can I export my data?",
        answer: "Yes. You can export all transactional records to standard CSV and JSON formats anytime."
      }
    ],
    supportEmail: "utsavjetani95@gmail.com",
    privacyPath: "/privacy-policy/spendwise"
  },
  {
    id: "smarttools",
    name: "SmartTools",
    category: "Utility Apps",
    tagline: "The all-in-one utility box with clean widget styling.",
    description: "A gorgeous compilation of everyday utility instruments. Features a precise spirit level, speed tester, unit converter, ruler, and custom barcode generator. Fully optimized, lightweight, and ad-supported.",
    iconName: "Compass",
    features: [
      "Scientific conversions across 30+ units",
      "Spirit level utilizing device accelerometers",
      "Wi-Fi & Cellular network speed diagnostic testing",
      "QR and Barcode creator/scanner",
      "Clean iOS/Android responsive layout design"
    ],
    uiMockup: {
      type: "utility",
      data: {
        heading: "Spirit Level",
        x: "0.0°",
        y: "0.2°",
        status: "Perfect"
      }
    },
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.utsavjetani.smarttools"
    },
    faq: [
      {
        question: "Why does the app require camera permissions?",
        answer: "Camera permissions are required exclusively to read barcodes/QR codes and trigger the flashlight. No imagery is uploaded."
      },
      {
        question: "Does the speed test consume a lot of mobile data?",
        answer: "Yes, network speed tests download and upload temp files to check bandwidth. We recommend running this on Wi-Fi if you have data caps."
      }
    ],
    supportEmail: "utsavjetani95@gmail.com",
    privacyPath: "/privacy-policy/smarttools"
  },
  {
    id: "aiassistant",
    name: "AIAssistant",
    category: "AI Apps",
    tagline: "Intelligent companion with local model capabilities.",
    description: "An advanced chat client integrated with Google Gemini models. Ask questions, brainstorm, and process PDFs on-device or via secure API keys. Privacy-centric design that doesn't save your text prompts.",
    iconName: "Sparkles",
    features: [
      "Direct API integration with Google Gemini",
      "Interactive code syntax highlight rendering",
      "Secure local API key storage",
      "PDF and image file text-extraction queries",
      "Minimalist interface with chat exporting capabilities"
    ],
    uiMockup: {
      type: "chat",
      data: {
        messages: [
          { role: "user", text: "Create a simple React theme hook" },
          { role: "assistant", text: "Here is a clean custom hook..." }
        ]
      }
    },
    storeLinks: {
      appStore: "https://apps.apple.com/app/aiassistant/id123459",
      playStore: "https://play.google.com/store/apps/details?id=com.utsavjetani.aiassistant"
    },
    faq: [
      {
        question: "Are my chat queries shared with third parties?",
        answer: "Queries are sent to Google Gemini API servers for processing. The developer does not receive, view, or store any of your chat queries."
      },
      {
        question: "How do I secure my own API Key?",
        answer: "API keys are stored directly in your phone's hardware keychain, encrypted, and are only accessed when submitting prompts."
      }
    ],
    supportEmail: "utsavjetani95@gmail.com",
    privacyPath: "/privacy-policy/aiassistant"
  }
];
