<template>
  <svg class="icon" aria-hidden="true" :style="{color, 'font-size':fontSize}">
    <use :xlink:href="href"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'Icon',
  props: {
    name: String,
    fontSize: String,
    color: String,
  },
  computed: {
    href() {
      return `#henri-${this.name}`;
    },
  },
};
</script>


<style scoped>
.icon {
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
