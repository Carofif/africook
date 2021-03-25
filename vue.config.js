module.exports = {
  publicPath: process.env.BASE_URL,
  // eslint-disable-next-line quote-props
  'transpileDependencies': [],
  pwa: {
    name: 'AfriCook',
    themeColor: '#00000021',
    manifestOptions: {
      short_name: 'AfriCook',
      description: '',
      theme_color: '#00000021',
      background_color: '#FFFFFF',
      display: 'standalone',
      orientation: 'portrait',
      start_url: process.env.BASE_URL,
    },
    workboxOptions: {
      exclude: [
        /index\.html$/,
        /web\.config$/,
      ],
    },
  },
};
