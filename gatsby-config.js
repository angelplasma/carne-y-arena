module.exports = {
  siteMetadata: {
    title: 'Carne y Arena',
    description: 'Carne y Arena is a groundbreaking virtual reality installation that allows the viewer to go inside the story and explore the human condition of immigrants and refugees.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
            plugins: [
              'autoprefixer'
            ]
          },
        },
        exclude: '\/global\/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NJFQJZJ',
      },
    },
  ],
};
