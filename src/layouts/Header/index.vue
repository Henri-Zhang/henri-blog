<template>
  <nav class="navbar fixed-top" :class="{scrolled:scrolled}">
    <a class="brand" href="/" target="_blank">
      <img src="@/assets/logo.png" alt="henri.ren">
      <span>
        <strong>henri</strong>.ren
      </span>
    </a>
    <h1>Welcome to my site</h1>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Header',
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    onScroll() {
      const distance = document.documentElement.scrollTop;
      if (distance > 200) {
        this.scrolled = true;
      } else if (distance <= 200) {
        this.scrolled = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="less" scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  padding: 1.5rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .brand {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      color: white;
      font-size: 2rem;
      vertical-align: middle;
    }

    img {
      max-width: 50px;
    }
  }

  h1 {
    font-family: 'Avenir LT 65 Medium';
    font-size: 2.5em;
    color: white;
    margin: 0;
    padding: 0;
  }

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 5rem;
  }
}
</style>
