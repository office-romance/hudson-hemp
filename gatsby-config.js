module.exports = {
  siteMetadata: {
    title: `Gatsby Proj`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `hudsonhemp`,
        accessToken: `MC5YTlJFTEJBQUFGN3VCTDVJ.YO-_vV0sYu-_vXw077-9Re-_ve-_vVpf77-977-977-9XQHvv73vv73vv73vv70xV--_ve-_vRXvv73vv70a77-9`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        }
      }
    }
  ]
};