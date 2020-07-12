module.exports = {
  siteMetadata: {
    title: `Creative Cognition`,
    name: `Creative Cognition`,
    siteUrl: `https://creative-cognition.co`,
    description: `Creative cognition; making creativity accessible to all one thought at a time`,
    hero: {
      heading: `Welcome to Creative Cognition!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/cogcreator`,
      },
      
      {
        name: `instagram`,
        url: `https://www.instagram.com/cognition_creative/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/creative-cognition/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/cc.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
