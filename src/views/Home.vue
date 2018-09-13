<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/images/logo.png">
    <img alt="Vue logo" src="~@/assets/images/logo/google.png">
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.home {
  background: red;
}
</style>
