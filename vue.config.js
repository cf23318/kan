// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
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
