type NavLink = {
  id: number;
  key: string;
  href: string;
  label: string;
};

// NAVIGATION
export const NAV_LINKS: NavLink[] = [
  { id: 0, href: "/", key: "home", label: "Home" },
  { id: 1, href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { id: 2, href: "/", key: "services", label: "Services" },
  { id: 3, href: "/", key: "pricing ", label: "Pricing " },
  { id: 4, href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    id: 0,
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    id: 1,
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    id: 2,
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    id: 3,
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    id: "0",
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    id: "1",
    title: "Our Community",
    links: ["board", "great", "executive"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "+23480382023" },
    { label: "Email Officer", value: "ekeneadmin@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
