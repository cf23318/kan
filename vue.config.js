const isDev = process.env.NODE_ENV === 'development';

// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: isDev ? 'template/serve.template.html' : 'template/build.template.html',
      filename: isDev ? 'index.html' : 'vue.php',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/function.scss";
          @import "@/assets/scss/variable.scss";
        `,
      }
    }
  }
}
