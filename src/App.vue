<template>
  <div id="app">
    <div id="nav">
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/help">Help</a> |
      <a href="/contactus">contactus</a>
    </div>
    <el-button>默认按钮</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  metaInfo: {
    title: '看tv-Kantv-全球华人首家在线视频分享网站',
    // titleTemplate: '%s | My Awesome Webapp',
    meta: [
      { vmid: 'keywords', name: 'keywords', content: '看tv-Kantv-全球华人首家在线视频分享网站'},
      { vmid: 'description', name: 'description', content: '看TV（KanTV）是全球华人首家影视视频分享平台，网站包含最新的电视剧、美剧、日韩剧、华语电影、好莱坞电影、以及各种动漫和重大体育赛事直播。在这里，有你想看的一切！'},
    ],
    // <meta name="Keywords" content="看tv-Kantv-全球华人首家在线视频分享网站" />
    // <meta name="Description" content="看TV（KanTV）是全球华人首家影视视频分享平台，网站包含最新的电视剧、美剧、日韩剧、华语电影、好莱坞电影、以及各种动漫和重大体育赛事直播。在这里，有你想看的一切！"/>
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/global.scss";
</style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $color-blue;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
