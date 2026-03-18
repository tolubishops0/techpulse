// import { Article } from "@/types";

export const categories = [
  "all",
  "quantum",
  "security",
  "telecom",
  "aI",
  "software",
  "gaming",
  "environment",
  "blockchain",
  "space",
  "mobile",
];
// export const allArticles: Article[] = [
//   {
//     slug: "anthropic-claude-35-sonnet",
//     title:
//       "Anthropic releases Claude 3.5 Sonnet, reshaping the developer landscape",
//     excerpt:
//       "The new model benchmarks significantly higher than previous versions on coding and reasoning tasks.",
//     category: "AI",
//     image: "/images/article-ai.png",
//     authorInitials: "SC",
//     date: "Mar 12",
//     readTime: "5 min read",
//     likeCount: 342,
//     commentCount: 34,
//   },
//   {
//     slug: "openai-custom-finetuning-api",
//     title: "OpenAI announces new custom model fine-tuning API for developers",
//     excerpt:
//       "Developers can now fine-tune models with unprecedented control over weights and training parameters.",
//     category: "AI",
//     image: "/images/article-ai.png",
//     authorInitials: "TR",
//     date: "Mar 6",
//     readTime: "9 min read",
//     likeCount: 671,
//     commentCount: 67,
//   },
//   {
//     slug: "google-gemini-ultra-benchmarks",
//     title: "Google Gemini Ultra beats GPT-4 on 30 out of 32 benchmarks",
//     excerpt:
//       "A deep dive into what the numbers actually mean for real-world developer use cases.",
//     category: "AI",
//     image: "/images/article-ai.png",
//     authorInitials: "BN",
//     date: "Mar 4",
//     readTime: "7 min read",
//     likeCount: 520,
//     commentCount: 48,
//   },

//   // ── Web Dev ─────────────────────────────────────────────────────────────────
//   {
//     slug: "react-19-rc",
//     title: "React 19 RC is here: What you need to know about the new compiler",
//     excerpt:
//       "Dive into the new compiler, actions, and use hooks that are changing the ecosystem.",
//     category: "Web Dev",
//     image: "/images/article-web.png",
//     authorInitials: "MW",
//     date: "Mar 10",
//     readTime: "8 min read",
//     likeCount: 892,
//     commentCount: 89,
//   },
//   {
//     slug: "nextjs-15-partial-prerendering",
//     title:
//       "Next.js 15 introduces Partial Prerendering — the future of hybrid rendering",
//     excerpt:
//       "The ultimate hybrid rendering strategy is finally landing in stable Next.js.",
//     category: "Web Dev",
//     image: "/images/article-web.png",
//     authorInitials: "KL",
//     date: "Mar 7",
//     readTime: "7 min read",
//     likeCount: 432,
//     commentCount: 43,
//   },
//   {
//     slug: "tailwind-v4-css-first",
//     title: "Tailwind CSS v4 goes CSS-first — no more config files",
//     excerpt:
//       "The new engine rewrites the entire framework around native CSS cascade layers and variables.",
//     category: "Web Dev",
//     image: "/images/article-web.png",
//     authorInitials: "AJ",
//     date: "Mar 2",
//     readTime: "6 min read",
//     likeCount: 763,
//     commentCount: 71,
//   },

//   // ── Open Source ─────────────────────────────────────────────────────────────
//   {
//     slug: "linux-kernel-62-released",
//     title: "Linux kernel 6.2 released with major performance improvements",
//     excerpt:
//       "Linus Torvalds announces the latest stable kernel with improved Rust integration.",
//     category: "Open Source",
//     image: "/images/article-opensource.png",
//     authorInitials: "LT",
//     date: "Mar 11",
//     readTime: "6 min read",
//     likeCount: 289,
//     commentCount: 27,
//   },
//   {
//     slug: "vscode-open-source-contributions",
//     title:
//       "How VS Code became the most contributed-to open source project on GitHub",
//     excerpt:
//       "A look at the contributor model, governance, and what keeps developers coming back.",
//     category: "Open Source",
//     image: "/images/article-opensource.png",
//     authorInitials: "DP",
//     date: "Mar 5",
//     readTime: "10 min read",
//     likeCount: 415,
//     commentCount: 39,
//   },
//   {
//     slug: "bun-10-stable",
//     title: "Bun 1.0 hits stable — is it finally time to ditch Node.js?",
//     excerpt:
//       "The all-in-one JS runtime promises 3x faster installs and built-in TypeScript support.",
//     category: "Open Source",
//     image: "/images/article-opensource.png",
//     authorInitials: "JR",
//     date: "Mar 1",
//     readTime: "8 min read",
//     likeCount: 931,
//     commentCount: 104,
//   },

//   // ── Cloud ────────────────────────────────────────────────────────────────────
//   {
//     slug: "hidden-costs-serverless",
//     title: "The hidden costs of serverless architecture at enterprise scale",
//     excerpt:
//       "Why some enterprise teams are moving back to bare metal and leaving the cloud behind.",
//     category: "Cloud",
//     image: "/images/article-cloud.png",
//     authorInitials: "AR",
//     date: "Mar 9",
//     readTime: "12 min read",
//     likeCount: 124,
//     commentCount: 12,
//   },
//   {
//     slug: "aws-re-invent-2025-highlights",
//     title: "AWS re:Invent 2025: Every major announcement in one place",
//     excerpt:
//       "From new EC2 instance types to Aurora serverless v3 — here's what matters.",
//     category: "Cloud",
//     image: "/images/article-cloud.png",
//     authorInitials: "MM",
//     date: "Mar 3",
//     readTime: "11 min read",
//     likeCount: 378,
//     commentCount: 41,
//   },
//   {
//     slug: "cloudflare-workers-ai",
//     title: "Cloudflare Workers AI brings inference to the edge for free",
//     excerpt:
//       "Run LLMs, image models, and embeddings globally without managing infrastructure.",
//     category: "Cloud",
//     image: "/images/article-cloud.png",
//     authorInitials: "CF",
//     date: "Feb 28",
//     readTime: "5 min read",
//     likeCount: 502,
//     commentCount: 56,
//   },

//   // ── Security ─────────────────────────────────────────────────────────────────
//   {
//     slug: "npm-zero-day-vulnerability",
//     title:
//       "Zero-day vulnerability found in popular npm package used by millions",
//     excerpt:
//       "Prototype pollution bug affects projects across the ecosystem. Patch immediately.",
//     category: "Security",
//     image: "/images/article-security.png",
//     authorInitials: "PJ",
//     date: "Mar 8",
//     readTime: "6 min read",
//     likeCount: 556,
//     commentCount: 55,
//   },
//   {
//     slug: "passkeys-replacing-passwords",
//     title: "Passkeys are finally replacing passwords — here's how they work",
//     excerpt:
//       "Apple, Google, and Microsoft have aligned on FIDO2. The password era is ending.",
//     category: "Security",
//     image: "/images/article-security.png",
//     authorInitials: "HK",
//     date: "Mar 5",
//     readTime: "8 min read",
//     likeCount: 743,
//     commentCount: 68,
//   },
//   {
//     slug: "supply-chain-attack-2025",
//     title: "The 2025 supply chain attack that nobody is talking about",
//     excerpt:
//       "A compromised build tool silently exfiltrated API keys from thousands of CI pipelines.",
//     category: "Security",
//     image: "/images/article-security.png",
//     authorInitials: "RV",
//     date: "Feb 27",
//     readTime: "9 min read",
//     likeCount: 861,
//     commentCount: 92,
//   },

//   // ── Tools ────────────────────────────────────────────────────────────────────
//   {
//     slug: "cursor-ai-editor-review",
//     title: "Cursor AI editor review: Is this the future of coding?",
//     excerpt:
//       "We spent two weeks writing production code with Cursor. Here's our honest take.",
//     category: "Tools",
//     image: "/images/article-tools.png",
//     authorInitials: "OB",
//     date: "Mar 11",
//     readTime: "10 min read",
//     likeCount: 1204,
//     commentCount: 118,
//   },
//   {
//     slug: "docker-desktop-alternatives",
//     title: "The best Docker Desktop alternatives in 2025",
//     excerpt:
//       "OrbStack, Rancher, and Podman — we compare speed, DX, and licensing.",
//     category: "Tools",
//     image: "/images/article-tools.png",
//     authorInitials: "FN",
//     date: "Mar 4",
//     readTime: "7 min read",
//     likeCount: 387,
//     commentCount: 44,
//   },
//   {
//     slug: "zed-editor-goes-open-source",
//     title: "Zed editor goes open source — and it's incredibly fast",
//     excerpt:
//       "Built in Rust with GPU-accelerated rendering, Zed opens its codebase to the world.",
//     category: "Tools",
//     image: "/images/article-tools.png",
//     authorInitials: "ZT",
//     date: "Feb 26",
//     readTime: "5 min read",
//     likeCount: 649,
//     commentCount: 73,
//   },

//   // ── Hardware ─────────────────────────────────────────────────────────────────
//   {
//     slug: "apple-m4-chip-analysis",
//     title: "Apple M4 chip teardown: What's actually changed under the hood",
//     excerpt:
//       "We dig into the die shots, memory bandwidth, and neural engine improvements.",
//     category: "Hardware",
//     image: "/images/article-hardware.png",
//     authorInitials: "CA",
//     date: "Mar 10",
//     readTime: "11 min read",
//     likeCount: 934,
//     commentCount: 87,
//   },
//   {
//     slug: "nvidia-blackwell-developer-review",
//     title: "NVIDIA Blackwell in the hands of developers — first impressions",
//     excerpt:
//       "The GB200 delivers 30x inference throughput gains. But who can actually afford it?",
//     category: "Hardware",
//     image: "/images/article-hardware.png",
//     authorInitials: "NV",
//     date: "Mar 6",
//     readTime: "9 min read",
//     likeCount: 712,
//     commentCount: 65,
//   },
//   {
//     slug: "raspberry-pi-5-review",
//     title:
//       "Raspberry Pi 5 review: Finally fast enough to use as a daily driver",
//     excerpt:
//       "The new PCIe slot, faster CPU, and proper power button change everything.",
//     category: "Hardware",
//     image: "/images/article-hardware.png",
//     authorInitials: "RP",
//     date: "Feb 25",
//     readTime: "8 min read",
//     likeCount: 445,
//     commentCount: 52,
//   },
// ];

export const features = [
  {
    icon: "⚡",
    title: "Lightning fast",
    description:
      "Built with Next.js PPR — static shell loads instantly, dynamic content streams in.",
  },
  {
    icon: "🎯",
    title: "Personalised feed",
    description:
      "Your dashboard learns what you read and surfaces the stories that matter to you.",
  },
  {
    icon: "🗂️",
    title: "8 categories",
    description:
      "AI, Web Dev, Cloud, Security, Open Source, Tools, Hardware — all in one place.",
  },
  {
    icon: "🔔",
    title: "Real-time alerts",
    description:
      "Get notified the moment a breaking story drops in your favourite category.",
  },
];

export const stats = [
  { value: "12,400+", label: "Monthly readers" },
  { value: "200+", label: "Articles published" },
  { value: "8", label: "Tech categories" },
  { value: "Daily", label: "New stories" },
];

export const steps = [
  {
    step: "01",
    title: "Browse the feed",
    description:
      "Head to /feed for the latest stories across every category, personalised to you.",
  },
  {
    step: "02",
    title: "Read & interact",
    description:
      "Like articles, drop comments, and bookmark stories to read later.",
  },
  {
    step: "03",
    title: "Track your reads",
    description:
      "Your dashboard shows reading history, bookmarks, and personalised recommendations.",
  },
];

export const testimonials = [
  {
    quote:
      "TechPulse is the first tech news site I actually check every morning. The signal-to-noise ratio is incredible.",
    name: "Sarah Chen",
    role: "Senior Engineer at Vercel",
    initials: "SC",
  },
  {
    quote:
      "I replaced five different newsletters with TechPulse. Everything I need is in one place.",
    name: "Marcus Webb",
    role: "Founder, DevTools Weekly",
    initials: "MW",
  },
  {
    quote:
      "The personalised feed actually works. It figured out I care about Rust and security within a week.",
    name: "Aisha Rahman",
    role: "Staff Engineer at Stripe",
    initials: "AR",
  },
];

export const categoryColors: Record<string, string> = {
  AI: "text-purple-400 bg-purple-400/10",
  Gaming: "text-blue-400 bg-blue-400/10",
  Security: "text-red-400 bg-red-400/10",
  Cloud: "text-sky-400 bg-sky-400/10",
  Mobile: "text-green-400 bg-green-400/10",
  cloud: "text-yellow-400 bg-yellow-400/10",
  Tools: "text-yellow-400 bg-yellow-400/10",
  Hardware: "text-orange-400 bg-orange-400/10",
  "Web Dev": "text-orange-400 bg-orange-400/10",
};

export const faqs = [
  {
    q: "Is TechPulse free to read?",
    a: "Yes, our core news feed and standard articles are completely free. We believe critical technology news should be accessible to all developers. We do offer a Pro subscription for deep-dive architectural analysis and premium courses.",
  },
  {
    q: "Do you have a light mode?",
    a: "TechPulse is designed as a dark-mode first experience, optimized for developer environments and reduced eye strain. A light mode is currently in beta and available to Pro subscribers in their account settings.",
  },
  {
    q: "How do bookmarks work?",
    a: "Once you create a free account, you can bookmark any article by clicking the ribbon icon. Bookmarks are synced across all your devices and can be organized into custom folders in your Dashboard.",
  },
  {
    q: "Can I access TechPulse via RSS?",
    a: "Absolutely. We provide comprehensive RSS feeds. You can subscribe to the global firehose at /rss/all, or subscribe to specific categories like /rss/ai or /rss/web-dev.",
  },
  {
    q: "How are the Trending articles selected?",
    a: "Our trending algorithm is based on a mix of recent engagement (likes, comments, read time) and recency. We heavily weight deep reading over superficial clicks to ensure high-quality content surfaces to the top.",
  },
  {
    q: "Can I leave comments on articles?",
    a: "Yes — comments are available to all registered users. We have a community moderation system and a code of conduct to keep discussions technical, respectful, and on-topic.",
  },
  {
    q: "Do you offer API access?",
    a: "Yes, Pro subscribers get access to our read-only GraphQL API. It allows you to programmatically fetch articles, search our archives, and integrate TechPulse content into your internal team dashboards.",
  },
  {
    q: "How do I cancel my Pro subscription?",
    a: "You can cancel anytime from your account settings under Billing. Your Pro access remains active until the end of the current billing period. No questions asked.",
  },
];

export const team = [
  {
    name: "Sarah Chen",
    role: "Editor in Chief",
    roleColor: "text-[#FF6B6B]",
    bio: "Former staff engineer at Vercel. Sarah leads our editorial direction and ensures technical accuracy across all our publications.",
  },
  {
    name: "Marcus Webb",
    role: "Lead Developer",
    roleColor: "text-blue-400",
    bio: "Creator of the TechPulse platform. Marcus focuses on performance, architecture, and delivering a world-class reading experience.",
  },
  {
    name: "Priya Nair",
    role: "Design Director",
    roleColor: "text-emerald-400",
    bio: "The creative force behind our brand. Priya crafts our editorial aesthetic, data visualizations, and interface systems.",
  },
];
