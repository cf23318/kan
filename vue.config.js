// vue.config.js
module.exports = {
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