export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Template",
  description:
    "Template for Nextjs Aplications",
  mainNav: [
    {
      title: "Home",
      href: "/",
      security: 'public',

    },
    {
      title: "Private Page",
      href: "/privatePage",
      security: 'private',
    },
    {
      title: "Configurations",
      href: "/configuracoes",
      security: 'private',
      type: 'dropdown',
      links: [
        {
          title: 'Config 1',
          href: '/config1'
        },
        {
          title: 'Config 2',
          href: '/config2'
        },
      ]
    },


  ],
  links: {
    home: "/",
    // dashboard: "/dash",
  },
};
