<template>
    <span>
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
      <contect-form></contect-form>
    </span>
</template>

<script>
import ContactForm from './ContactForm';

export default {
  name: 'Main',
  components: {
    'contect-form': ContactForm,
  },
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
#contact-form{
  padding-bottom: 300px;
}
</style>
