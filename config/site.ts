export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "", // Shows next to the logo
  description:
    "Template for Next Projects with Typescript, TailwindCSS, ESLint, Prettier, Radix, Login, Session on Cookies, Dark Theme and more!",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Data Table Example",
      href: "/datatable",
    },

  ],
  links: {
    home: "/",
    dashboard: "/dashboard",
  },
};
