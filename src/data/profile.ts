import { ProfileContent } from "@/types/profile";

export const profileContent: ProfileContent = {
  siteTitle: "Gaurav Kumar | NLP Researcher",
  siteDescription:
    "PhD researcher in NLP at IISER Bhopal, focused on fact-checking, multimodal reasoning, and reliable LLM systems.",
  hero: {
    name: "Gaurav Kumar",
    role: "PhD Researcher in Natural Language Processing",
    institution: "Indian Institute of Science Education and Research (IISER) Bhopal",
    summary:
      "I build reliable NLP systems for misinformation detection, multimodal verification, and LLM-based reasoning. My work spans general fact-checking, multilingual NLP, and vision-language grounding with a strong focus on measurable research impact.",
    profileImage: "/protfolio__/gaurav.jpg",
    primaryCta: {
      label: "Email Me",
      href: "mailto:gaurav22@iiserb.ac.in",
    },
    secondaryCta: {
      label: "Explore Publications",
      href: "#publications",
    },
    metrics: [
      {
        label: "Research Focus",
        value: "Fact-checking, Multimodal NLP, LLM Reasoning",
      },
      {
        label: "Recent Venue",
        value: "WWW 2026 (Web4Good Track)",
      },
      {
        label: "Current Affiliation",
        value: "IISER Bhopal",
      },
    ],
  },
  research: {
    headline:
      "Designing trustworthy NLP pipelines for fact verification across text and multimodal settings.",
    summary:
      "My research targets robust evidence-aware reasoning in LLMs, with emphasis on entailment-driven verification, multilingual transfer, and multimodal fusion for misinformation-heavy environments.",
    interests: [
      "General, multilingual, and multimodal fact-checking",
      "Agentic AI and autonomous LLM systems",
      "Prompt engineering and Model Context Protocol workflows",
      "LLM reasoning, inference optimization, and evaluation",
      "Biomedical NLP and adverse drug reaction mining",
    ],
    methods: [
      "LoRA and PEFT fine-tuning",
      "Natural Language Inference-based verification",
      "Retrieval-grounded generation and evidence routing",
      "Contrastive multimodal representation learning",
      "Benchmark-driven error analysis and ablations",
    ],
  },
  publications: [
    {
      id: "ijcnlp-aacl-2025",
      title:
        "Improving the Fact-Checking Performance of Language Models by Relying on Their Entailment Ability",
      authors: "Gaurav Kumar et al.",
      venue: "ARR for the ACL",
      year: 2025,
      status: "under_review",
      abstract:
        "Introduces an entailment-centered fact-checking strategy that improves macro-F1 across RAW-FC and LIAR-RAW by strengthening claim-evidence consistency scoring.",
      links: {},
    },
    {
      id: "www-2026-multicheck",
      title:
        "Multimodal Fact Checking with Unified Visual, Textual, and Contextual Representations",
      authors: "Aditya Kishore*, Gaurav Kumar* et al.",
      venue: "The Web Conference (WWW) 2026, Web4Good Track",
      year: 2026,
      status: "accepted",
      abstract:
        "Presents a unified multimodal architecture with relational fusion and contrastive objectives, reporting state-of-the-art weighted F1 (0.84) on Factify 2.",
      links: {},
    },
    {
      id: "dhow-milla-2026-vlms",
      title: "On VLMs for Diverse Tasks in Multimodal Meme Classification",
      authors: "Deepesh Gavit, Gaurav Kumar et al.",
      venue:
        "DHOW-MiLLA Workshop, co-located with The Web Conference (WWW) 2026",
      year: 2026,
      status: "accepted",
      abstract:
        "Evaluates vision-language models across diverse multimodal meme classification tasks and highlights transfer behavior under varying annotation regimes.",
      links: {},
    },
  ],
  experience: [
    {
      id: "iiser-phd-research",
      role: "PhD Researcher (NLP)",
      organization: "IISER Bhopal",
      location: "Bhopal, India",
      period: "2022 - Present",
      supervisor:
        "Dr. Jasabanta Patro, Assistant Professor, Department of Data Science and Engineering",
      highlights: [
        "Developed an entailment-driven fact-checking framework with up to 28.6% macro-F1 gains on LIAR-RAW and 44.3% gains on RAW-FC.",
        "Built MultiCheck, a unified multimodal verification pipeline integrating text and image encoders with relational fusion.",
        "Designed reproducible evaluation pipelines for claim verification in multilingual and multimodal settings.",
      ],
    },

    // ✅ Added: Teaching Assistant experience
    {
      id: "iiser-teaching-assistant",
      role: "Teaching Assistant",
      organization:
        "Indian Institute of Science Education and Research (IISER) Bhopal",
      location: "Bhopal, India",
      period: "2023 - 2026",
      highlights: [
        "Deep Learning (DSE316) — Jan–Apr 2023",
        "Introduction to Programming (ECS102) — Aug–Nov 2023",
        "Database Management Systems (DSE310) — Jan–Apr 2024",
        "Natural Language Processing (DSE407/607) — Aug–Nov 2024",
        "Natural Language Processing (DSE407/607) — Jan–Apr 2025",
        "Advanced Natural Language Processing (DSE418/618) — Aug–Nov 2025",
        "Data Structures and Algorithms (ECS202) — Jan–Apr 2026",
      ],
    },

    {
      id: "jnu-thesis",
      role: "M.Tech Thesis Researcher",
      organization: "Jawaharlal Nehru University",
      location: "New Delhi, India",
      period: "2022",
      supervisor:
        "Dr. Aditi Sharan, Associate Professor, School of Computer and Systems Sciences",
      highlights: [
        "Researched deep learning methods for adverse drug reaction extraction from clinical text.",
        "Focused on entity extraction for discontinuous mentions in biomedical NLP workflows.",
      ],
    },
  ],
  projects: [
    {
      id: "fake-news-link-prediction",
      title: "Fake News Detection and Link Prediction",
      description:
        "Research prototype combining linguistic signals and graph structure to detect misinformation and predict propagation links in social media ecosystems.",
      image: "/fake.jpg",
      technologies: ["NLP", "Graph Neural Networks", "Misinformation Analysis"],
      links: {
        repo: "https://github.com/gauravkumar62024",
      },
    },
    {
      id: "adr-entity-extraction",
      title: "Adverse Drug Reaction Entity Extraction",
      description:
        "Entity extraction framework inspired by maximal-clique style reasoning for complex and discontinuous biomedical mentions.",
      image: "/jnu_thesis.png",
      technologies: ["Biomedical NLP", "Named Entity Recognition", "Deep Learning"],
      links: {
        repo: "https://github.com/gauravkumar62024",
      },
    },
    {
      id: "nlp-toolkit",
      title: "NLP Processing Toolkit",
      description:
        "Interactive toolkit for tokenization, POS tagging, chunking, stemming, lemmatization, NER, parsing, and feature extraction with practical visual outputs.",
      image: "/NLP_basicjob.png",
      technologies: ["Python", "NLTK", "spaCy", "Applied NLP"],
      links: {
        repo: "https://github.com/gauravkumar62024",
      },
    },
  ],
  gallery: [
    {
      id: "gallery-fact-check",
      title: "Fact-Checking System Artifact",
      image: "/fake.jpg",
      caption:
        "Visualization from misinformation detection and verification workflows used for claim-level analysis.",
    },
    {
      id: "gallery-thesis",
      title: "Thesis Research Snapshot",
      image: "/jnu_thesis.png",
      caption:
        "Representative figure from M.Tech thesis work on adverse drug reaction information extraction.",
    },
    {
      id: "gallery-toolkit",
      title: "Applied NLP Toolkit Interface",
      image: "/NLP_basicjob.png",
      caption:
        "Practical NLP toolkit UI demonstrating classical preprocessing and feature extraction tasks.",
    },
  ],
  talks: [
    {
      id: "indoml-2025",
      title: "Participant",
      event: "Indian Symposium on Machine Learning (IndoML 2025)",
      location: "BITS Pilani Hyderabad, India",
      date: "2025",
      type: "symposium",
    },
    {
      id: "indoml-2024",
      title: "Participant",
      event: "Indian Symposium on Machine Learning (IndoML 2024)",
      location: "BITS Pilani Goa, India",
      date: "2024",
      type: "symposium",
    },
    {
      id: "indoml-2023",
      title: "Participant",
      event: "Indian Symposium on Machine Learning (IndoML 2023)",
      location: "IIT Bombay, India",
      date: "2023",
      type: "symposium",
    },
    {
      id: "cvit-2023",
      title: "Summer School Participant",
      event: "CVIT Summer School",
      location: "IIIT Hyderabad, India",
      date: "2023",
      type: "workshop",
    },
  ],
  service: [
    {
      id: "community-ml",
      title: "Academic Community Participation",
      organization: "IndoML Community",
      period: "2023 - 2025",
      details:
        "Contributed to technical discussions and research exchange sessions around current ML and NLP directions.",
    },
    {
      id: "open-research",
      title: "Open Research and Reproducibility",
      organization: "NLP Research Projects",
      period: "Ongoing",
      details:
        "Maintains transparent experiment reporting and benchmark-focused reproducibility for fact-checking systems.",
    },

    // ✅ Added: EMNLP + Engineer's Day service
    {
      id: "emnlp-2025-volunteer",
      title: "Volunteer",
      organization: "EMNLP 2025",
      period: "2025",
      details:
        "Contributed as a conference volunteer supporting organization and coordination activities.",
    },
    {
      id: "engineers-day-iiser-2025",
      title: "Volunteer and Participant",
      organization: "Engineer's Day, IISER Bhopal",
      period: "13 September 2025",
      details:
        "Participated in technical activities and volunteered in organizing events during Engineer's Day celebrations at IISER Bhopal.",
    },
  ],
  awards: [
    {
      id: "gate-2021",
      title: "GATE Qualification (Computer Science and Engineering)",
      issuer: "Graduate Aptitude Test in Engineering",
      year: "2021",
      detail: "Qualified with focus on CS fundamentals and analytical aptitude.",
    },
    {
      id: "gate-2022",
      title: "GATE Qualification (Computer Science and Engineering)",
      issuer: "Graduate Aptitude Test in Engineering",
      year: "2022",
      detail:
        "Repeated national-level qualification in Computer Science and Engineering.",
    },
    {
      id: "jnu-entrance-2020",
      title: "JNU Entrance Examination",
      issuer: "Jawaharlal Nehru University",
      year: "2020",
      detail: "Selected for M.Tech in Statistical Computing (Data Science).",
    },

    // ✅ Added: Best TA Award
    {
      id: "best-ta-iiser-2025",
      title: "Best Teaching Assistant Award",
      issuer: "IISER Bhopal",
      year: "2025",
      detail: "Awarded for outstanding teaching assistance during Aug–Nov 2025 semester.",
    },
  ],
  certifications: [
    {
      id: "iitk-internship",
      title: "Research Internship",
      issuer: "IIT Kanpur",
      year: "2018",
      detail: "57-day research internship program.",
    },
    {
      id: "internshala-python",
      title: "Python Training",
      issuer: "Internshala",
      year: "2018",
      detail: "6-week structured training in Python programming.",
    },
    {
      id: "msme-web-dev",
      title: "Web Development Training",
      issuer: "M.S.M.E",
      year: "2019",
      detail: "4-week training on web development fundamentals.",
    },
  ],
  skills: [
    {
      id: "nlp",
      title: "NLP and LLM Skills",
      skills: [
        "LLM fine-tuning (LoRA, PEFT)",
        "BERT and RoBERTa",
        "Natural Language Inference",
        "Prompt engineering",
        "Knowledge-grounded fact-checking",
        "Multilingual and multimodal NLP",
      ],
    },
    {
      id: "ml",
      title: "ML and Data Science",
      skills: [
        "Supervised and unsupervised learning",
        "Feature engineering",
        "Model evaluation and optimization",
        "Statistical modeling",
        "Cross-validation and regularization",
      ],
    },
    {
      id: "tools",
      title: "Programming and Tools",
      skills: [
        "Python",
        "SQL",
        "PyTorch",
        "Scikit-learn",
        "NumPy and Pandas",
        "Git and GitHub",
        "Docker",
        "Bash and Linux",
        "Jupyter",
      ],
    },
  ],
  education: [
    {
      id: "phd-iiser",
      degree: "PhD",
      institution: "Indian Institute of Science Education and Research",
      location: "Bhopal, India",
      period: "2022 - Present",
      field: "Data Science and Engineering",
      score: "CPI: 8.00/10",
    },
    {
      id: "mtech-jnu",
      degree: "M.Tech",
      institution: "Jawaharlal Nehru University",
      location: "New Delhi, India",
      period: "2020 - 2022",
      field: "Statistical Computing (Data Science)",
      score: "CPI: 8.2/9",
    },
    {
      id: "btech-aku",
      degree: "B.Tech",
      institution: "Aryabhatta Knowledge University",
      location: "Patna, India",
      period: "2015 - 2019",
      field: "Computer Science and Engineering",
      score: "CPI: 8.11/10",
    },
  ],
  contact: {
    primaryEmail: "gaurav22@iiserb.ac.in",
    secondaryEmail: "gauravkumar62024@gmail.com",
    location: "Bhopal, India",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gaurav-kumar-31b2b3162/",
      },
      {
        label: "GitHub",
        href: "https://github.com/gauravkumar62024",
      },
    ],
  },
};
