const settings = {
  name: "tara-react",
  state: {
    frontity: {
      url: "https://tarainstruments.com",
      title: "Tara Instruments",
      description:
        // this description isn't seen anywhere anymore. (removed the description meta tag from index.js, as it is now directly handled by AIOSEO on WordPress.)
        "Tara Instruments is an Instruments Provider for industry-standard scientific apparatus, for numerous applications.",
    },
  },
  packages: [
    {
      name: "@awsmin/f1",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About", "/about/"],
            ["Principals", "/principals/"],
            ["Products", "/products/"],
            ["News", "/news/"],
            ["Careers", "/careers/"],
            ["Contact", "/contact/"],
          ],
          socialLinks: [
            ["Facebook", "https://www.facebook.com/TaraInternational1980/"],
            [
              "LinkedIn",
              "https://www.linkedin.com/company/taragroupofbusiness/",
            ],
            [
              "YouTube",
              "https://www.youtube.com/channel/UCqTtnisCnTNwVOO_NfFxDqQ",
            ],
            [
              "Instagram",
              "https://instagram.com/tara.international?utm_medium=copy_link",
            ],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://tarainstruments.com",
          homepage: "/home",
          postsPage: "/products",
          params: {
            per_page: 100,
          },
          categoryBase: "category",
          postTypes: [
            {
              type: "principals", // type slug
              endpoint: "principals", // REST API endpoint
              archive: "/principals", // link where this custom posts are listed
            },
            {
              type: "news", // type slug
              endpoint: "news", // REST API endpoint
              archive: "/news", // link where this custom posts are listed
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings",
  ],
};

export default settings;
