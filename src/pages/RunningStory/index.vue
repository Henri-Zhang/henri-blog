<template>
  <Raining />
</template>

<script lang="ts">
import Raining from '@/components/Raining';

export default {
  name: 'RunningStory',
  data() {
    return {};
  },
  components: {
    Raining,
  },
};
</script>

<style lang="less" scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: '#6882ff';
}
</style>
