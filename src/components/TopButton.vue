<template>
  <button class="rounded-circle button" @click="backToTop">
    <!-- <FontAwesome name="chevron-up" /> -->
    <span>TOP</span>
  </button>
</template>

<script>
export default {
  name: 'TopButton',
  props: {
    msg: String,
  },
  methods: {
    backToTop() {
      console.log('######', '回到顶部');
    },
  },
};
</script>

<style scoped>
.button {
  position: fixed;
  right: 2%;
  bottom: 2%;
  display: block;
  width: 4rem;
  height: 4rem;
  padding: 10px 0;
  /* opacity: 0; */
  /* visibility: hidden; */
  color: white;
  font-weight: bold;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 3;
}
</style>
