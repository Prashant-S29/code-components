const navLinks: {
  category: string;
  links: { href: string; text: string }[];
}[] = [
  {
    category: "Navigations",
    links: [
      {
        href: "/",
        text: "Home",
      },
      {
        href: "/collections",
        text: "Demos",
      },
      {
        href: "https://github.com/Prashant-S29",
        text: "Resources",
      },
    ],
  },
  {
    category: "Socials",
    links: [
      {
        href: "https://www.linkedin.com/in/prashant-singh-529391250/",
        text: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/prashant.o29o/",
        text: "Instagram",
      },
      {
        href: "https://code-prashant.vercel.app/",
        text: "Portfolio",
      },
      {
        href: "https://dribbble.com/Code-Prashant",
        text: "Dribbble",
      },
    ],
  },
];

const sideMenu: {
  category: string;
  links: { href: string; text: string; tag: string }[];
  status: "available" | "soon" | "lock";
}[] = [
  {
    category: "Get Started",
    links: [
      {
        href: "/",
        text: "Introduction",
        tag: "",
      },
      {
        href: "/collections",
        text: "Collections",
        tag: "",
      },
    ],
    status: "available",
  },
  {
    category: "Menu",
    links: [
      {
        href: "/collections/grid-menu",
        text: "Grid Menu",
        tag: "",
      },
    ],
    status: "available",
  },
  {
    category: "Landing Page",
    links: [
      {
        href: "/collections/fix-studio-landing-page",
        text: "Fix Studio",
        tag: "New",
      },
    ],
    status: "available",
  },
  {
    category: "Mouse",
    links: [
      {
        href: "/collections/painting-effect",
        text: "Painting Effect",
        tag: "",
      },
    ],
    status: "available",
  },
  {
    category: "Scroll",
    links: [
      {
        href: "/collections/text-opacity-on-scroll",
        text: "Text opacity on scroll",
        tag: "",
      },
    ],
    status: "available",
  },
  {
    category: "Basic Components",
    links: [
      {
        href: "/collections/text-opacity-on-scroll",
        text: "Text opacity on scroll",
        tag: "",
      },
    ],
    status: "available",
  },
  {
    category: "3d Components",
    links: [],
    status: "lock",
  },
];

const allTags: { href: string; text: string }[] = [
  {
    href: "/collections",
    text: "Collections",
  },
  {
    href: "https://code-prashant.vercel.app/",
    text: "About Me",
  },
  {
    href: "/component-suggestion",
    text: "Suggest a component to REDESIGN",
  },
];

const allComponents: {
  componentId: string;
  introVideo: string;
  thumbNail: string;
  demoLink: string;
  sourceCode: string;
  date: string;
  tags: string[];
  difficulty: "Easy" | "Intermediate" | "Advanced";
  title: string;
  description: string;
}[] = [
  {
    componentId: "fix-studio-landing-page",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710057227/code-components/hgmnnxeqx9nnnhqm2cae.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057189/code-components/zgojk0j7ocdzqgbqaxhx.png",
    demoLink: "https://fix-studio-landing-page.vercel.app/",
    sourceCode: "https://github.com/Prashant-S29/fix-studio-landing-page.git",
    date: "January 27, 2024",
    tags: ["Landing Page", "Agency Website", "Smooth Scroll", "GSAP"],
    difficulty: "Intermediate",
    title: "Fix Studio Landing Page",
    description:
      "Recreated amazing landing page of Fix Studio - A web design agency. ",
  },
  {
    componentId: "grid-menu",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710058396/code-components/q8wih9yifh6akxjhy2tc.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057189/code-components/svceo2ekvom2h8dmumjz.png",
    demoLink: "https://grid-menu.vercel.app/",
    sourceCode: "https://github.com/Prashant-S29/grid-menu.git",
    date: "January 22, 2024",
    tags: ["Awwwards", "Menu", "Aniamted Links", "Drop Down"],
    difficulty: "Intermediate",
    title: "Grid Menu",
    description:
      "Aniamted grid based drop down menu. Fully type safe, build in React using NextJs",
  },
  {
    componentId: "painting-effect",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710057210/code-components/wtjhwbu3mxs0yyf8yt5y.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057189/code-components/n1w7pcbl6pbuk9oac4dk.png",
    demoLink: "https://painting-effect.vercel.app/",
    sourceCode: "https://github.com/Prashant-S29/painting-effect.git",
    date: "January 15, 2024",
    tags: ["Mouse", "Interaction", "Colours"],
    difficulty: "Easy",
    title: "Painting Effect",
    description:
      "Beautifull painting effect on mouse interaction. No dependencies used",
  },
  {
    componentId: "text-opacity-on-scroll",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710057208/code-components/d4lk0oqn5dwkauehzwxf.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057189/code-components/le92j2drsuwngj7gjqyz.png",
    demoLink: "https://text-opacity-on-scroll.vercel.app",
    sourceCode: "https://github.com/Prashant-S29/Text-opacity-on-scroll.git",
    date: "January 03, 2024",
    tags: ["Scroll", "Text", "Framer Motion"],
    difficulty: "Advanced",
    title: "Text Opacity on Scroll",
    description: "Profeesional text opacity effect made using framer motion",
  },
  {
    componentId: "scroll-triggered-image-gallery",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710057228/code-components/s2x4pfma0nlaovsozmut.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057191/code-components/qg78g5ijsbwqtt0icctf.png",
    demoLink: "https://gasp-image-gallery.vercel.app/",
    sourceCode: "https://github.com/Prashant-S29/gasp-image-gallery.git",
    date: "December 28, 2023",
    tags: ["Scroll", "Gallery", "GSAP"],
    difficulty: "Advanced",
    title: "Scroll Triggered Image Gallery",
    description: "GSAP based scroll triggered image gallery.",
  },

  {
    componentId: "emoji-mouse-trail-effect",
    introVideo:
      "https://res.cloudinary.com/da7mz2ivn/video/upload/v1710057195/code-components/eynxicqkts7ru4iphb9n.mp4",
    thumbNail:
      "https://res.cloudinary.com/da7mz2ivn/image/upload/v1710057188/code-components/t4m9z6k26hklrcz5uziv.png",
    demoLink: "",
    sourceCode:
      "https://github.com/Prashant-S29/basic-components/tree/main/emojy-mouse-trail",
    date: "December 28, 2023",
    tags: ["Mouse Effect"],
    difficulty: "Easy",
    title: "Emoji Mouse Trail Effect",
    description: "Creative Mouse moving effect using emojies.",
  },
];

export { navLinks, sideMenu, allTags, allComponents };
