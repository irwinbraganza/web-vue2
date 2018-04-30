<template>
  <div id="app">
    <v-app id="inspire">
      <site-header></site-header>
      <v-content>
        <router-view/>
      </v-content>
      <site-footer></site-footer>
    </v-app>
  </div>
</template>

<script>
import SiteHeader from './components/Header';
import SiteFooter from './components/Footer';


export default {
  name: 'App',
  components: {
    'site-header': SiteHeader,
    'site-footer': SiteFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  margin-top:45px;
}
</style>
