<template>
  <div>
    <my-header/>
    <greet/>
    <hobbies/>
    <learn-more/>
    <my-footer/>
    <top-button/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/layouts/Header';
import Greet from './Greet';
import Hobbies from './Hobbies';
import LearnMore from './LearnMore';
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
    LearnMore,
    MyFooter: Footer,
    TopButton,
  },
  methods: {
    func() {},
  },
};
</script>
