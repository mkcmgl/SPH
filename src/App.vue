<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app">
    <Header>

    </Header>
    <router-view>

    </router-view>
    <Footer v-show="$route.meta.show">
    </Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import typeNav from './components/typeNav'

export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
