module.exports = {
  siteMetadata: {
    title: 'Carne y Arena',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          '.scss': { syntax: 'postcss-scss' },
        },
        exclude: '\/global\/',
      },
    },
  ],
};
