<template>
  <v-app id="inspire">
    <v-toolbar fixed>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat href="about">About</v-btn>
        <v-btn flat @click="$vuetify.goTo(selector2, options)">Slides</v-btn>
        <v-btn flat @click="$vuetify.goTo(selector3, options)">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
       <v-parallax src="https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-parallax>
       <v-container fluid>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
      </v-container>
      <v-carousel id="carousel-link">
        <v-carousel-item v-for="(slideritem,i) in slideritems"
        :src="slideritem.src"
        :key="i"
        ></v-carousel-item>
      </v-carousel>
      <v-container fluid>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
        <p>Pellentesque habitant morbi tristique senectus turpis egestas.</p>
      </v-container>
      <v-container id="contact-form">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-select
            label="Item"
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            required
          ></v-select>
          <v-checkbox
            label="Do you agree?"
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            required
          ></v-checkbox>
          <v-btn
            @click="submit"
            :disabled="!valid"
          >submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-content>
    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-title class="teal white--text">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            dark
            class="mx-3"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="grey lighten-3">
          <v-layout>
            <v-flex
              v-for="(col, i) in rows"
              :key="i"
              xs3
            >
              <span class="body-2" v-text="col.title.toUpperCase()"></span>
              <div
                v-for="(child, i) in col.children"
                :key="i"
                v-text="child"
              ></div>
            </v-flex>
            <v-flex xs3 layout column>
              <span class="body-2">CONTACT</span>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import sgMail from '@sendgrid/mail';

export default {
  name: 'Main',
  components: {
  },
  data() {
    return {
      show: true,
      type: 'number',
      number: 9999,
      selector2: '#carousel-link',
      selector3: '#contact-form',
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: -80,
      easing: 'easeInOutCubic',
      slideritems: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        },
      ],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      rows: [
        {
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit'],
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular'],
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper'],
        },
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: 'irwin.braganza@kodework.com',
          from: this.email,
          subject: 'Sending with SendGrid is Fun',
          text: 'and easy to do anywhere, even with Node.js',
          html: '<strong>and easy to do anywhere, even with Node.js yallla!!</strong>',
        };
        sgMail.send(msg);
      }
    },
    clear() {
      this.$refs.form.reset();
    },
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin-top:60px;
}
footer .card__text{
  padding-top: 50px;
  padding-bottom: 50px;
}
#contact-form{
  padding-bottom: 300px;
}
</style>
