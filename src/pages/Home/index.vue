<template>
  <div>
    <my-header></my-header>
    <h1>Home</h1>
    <my-footer></my-footer>
    <top-button></top-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import TopButton from '@/components/TopButton';

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    MyHeader: Header,
    MyFooter: Footer,
    TopButton,
  },
  methods: {
    func() {},
  },
};
</script>

