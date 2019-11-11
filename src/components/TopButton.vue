<template>
  <button class="rounded-circle button" :class="animation" @click="backToTop">
    <Icon name="up"/>
    <span>TOP</span>
  </button>
</template>

<script>
import _ from 'lodash';
import Icon from '@/components/Icon';

export default {
  name: 'TopButton',
  data() {
    return {
      animation: '',
    };
  },
  methods: {
    onScroll() {
      const distance = document.documentElement.scrollTop;
      if (distance > 200) {
        this.animation = 'fade-in';
      } else if (distance <= 200) {
        this.animation = 'fade-out';
      }
    },
    backToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    throttleOnScroll() {
      return _.throttle(this.onScroll, 200);
    },
  },
  components: {
    Icon,
  },
  created() {
    window.addEventListener('scroll', this.throttleOnScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttleOnScroll);
  },
};
</script>

<style scoped lang="less">
.button {
  position: fixed;
  right: 2%;
  bottom: 2%;
  display: block;
  width: 4rem;
  height: 4rem;
  opacity: 0;
  visibility: hidden;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 3;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  span {
    line-height: 1.2rem;
    font-size: 1.2rem;
    display: block;
    text-align: center;
  }

  span:last-child {
    font-family: Avenir-Light, sans-serif;
  }
}
</style>
