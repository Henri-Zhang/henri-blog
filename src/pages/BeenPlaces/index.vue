<template>
  <div class="container">
    <h1 class="title">The places I've been to</h1>
    <div class="citys">
      <city
        v-for="item in upsetPlaces"
        :key="item.name"
        :name="item.name"
        :imgSrc="item.img"
        :link="item.link"
      />
    </div>
    <my-footer />
    <top-button />
  </div>
</template>

<script lang="ts">
import _ from 'lodash';
import beenPlaces from '@/datas/beenPlaces';
import City from './City';
import Footer from '@/layouts/Footer';
import TopButton from '@/components/TopButton';

export default {
  name: 'BeenPlaces',
  data() {
    return {
      upsetPlaces: [],
    };
  },
  beforeMount() {
    this.upsetPlaces = _.shuffle(beenPlaces);
  },
  components: {
    City,
    MyFooter: Footer,
    TopButton,
  },
};
</script>

<style lang="less" scoped>
.container {
  .title {
    width: 100%;
    text-align: center;
    font-family: 'Avenir LT 65 Medium';
    margin: 3rem 0;
  }

  .citys {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    margin-bottom: 5rem;
  }
}
</style>
