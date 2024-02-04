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
  // {
  //   category: "Text",
  //   links: [],
  //   status: "soon",
  // },
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1706330818/dasup8clnsmy1wcus69p.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1706330816/mljlq62cqmfyeevpkx9v.png",
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1705845342/cisgc06qcei2b1aokptx.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1705845692/cccrow7qwsfo3fooy5ni.png",
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1706018364/ertnyp2nydifgkaggtkm.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1706018362/wfvhubn9ghizc2yvnmvk.png",
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1706025626/pxckrzos3ujx1mwdunoe.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1706025624/bzw57odvndnv9wh5nhpd.png",
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1706074236/iz1bqobmpvbn4whez3ye.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1706074213/yh8zqbdsjdsaatxtadfq.png",
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
      "https://res.cloudinary.com/denl2iizs/video/upload/v1706341098/l5gxra1igjv5rwjs46mo.mp4",
    thumbNail:
      "https://res.cloudinary.com/denl2iizs/image/upload/v1706341097/xxysw8visvrop5cpsdta.png",
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
