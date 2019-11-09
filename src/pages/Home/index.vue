<template>
  <div>
    <my-header></my-header>
    <greet/>
    <hobbies/>
    <div style="min-height: 1000px; background: #00bcd4;"></div>
    <my-footer></my-footer>
    <top-button></top-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/layouts/Header';
import Greet from './Greet';
import Hobbies from './Hobbies';
import Footer from '@/layouts/Footer';
import TopButton from '@/components/TopButton';

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    MyHeader: Header,
    Greet,
    Hobbies,
    MyFooter: Footer,
    TopButton,
  },
  methods: {
    func() {},
  },
};
</script>
