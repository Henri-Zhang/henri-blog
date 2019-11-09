<template>
  <div class="background container">
    <h1>Nice to meet you</h1>
    <h2>And my name is Henri</h2>
  </div>
</template>

<script lang="ts">
</script>

<style lang="less" scoped>
@import '~@/styles/common';

.background {
  min-height: 800px;
  .fixed-background('https://henri.oss-cn-hangzhou.aliyuncs.com/home_background_1.jpg');
}

.container {
  padding-top: 300px;
  padding-left: 10%;

  h1,
  h2 {
    font-family: Avenir-Light, sans-serif;
    color: white;
    text-shadow: 2px 1px 15px black;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;
  }
}
</style>
