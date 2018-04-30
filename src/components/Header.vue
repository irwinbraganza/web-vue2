<template>
  <span>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title ><v-btn flat @click="$router.push('/')">Vue2</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat @click="$router.push('/about')">About</v-btn>
        <v-btn flat @click="$vuetify.goTo(selector2, options)">Slides</v-btn>
        <v-btn flat @click="$vuetify.goTo(selector3, options)">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="side_item in side_items"
        :key="side_item.title"
        @click="$router.push(side_item.link)">
          <v-list-tile-action>
            <v-icon>{{ side_item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ side_item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: null,
      selector2: '#carousel-link',
      selector3: '#contact-form',
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: -80,
      easing: 'easeInOutCubic',
      side_items: [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'About', icon: 'question_answer', link: '/about' },
      ],
    };
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) {
        return Number(value);
      }
      return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
    element() {
      let elementReturn;
      if (this.selected === 'Button') {
        elementReturn = this.$refs.button;
      } else if (this.selected === 'Radio group') {
        elementReturn = this.$refs.radio;
      }
      return elementReturn;
    },
  },
};
</script>

<style>

</style>
