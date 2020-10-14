// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// 修改配置文件需要重启
module.exports = {
  // 网站title
  siteName: '喜剧之王的博客',
  // meta
  siteDescription: '喜剧之王的博客',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://47.242.19.80:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        // singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/blogs/:id',
        component: './src/templates/Blog.vue'
      }
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        // options here will be passed to less-loader
      }
    }
  }
}
