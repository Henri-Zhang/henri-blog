<template>
  <div class="learn-more">
    <div class="title">Wanna know more about me?</div>
    <div class="tip">Click here</div>
    <ul>
      <li>
        <router-link to="/been-places">The places I've been to</router-link>
      </li>
      <li>
        <router-link to="/running-story">My running story</router-link>
      </li>
      <li>
        <a href="/blog">My blog</a>
      </li>
      <li>
        <router-link to="/snow">Let's snow! Sylvia.</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import '~@/styles/common';

.learn-more {
  color: white;
  font-family: 'Avenir LT 65 Medium';
  padding: 30px 20%;
  min-height: 400px;
  .fixed-background('https://henri.oss-cn-hangzhou.aliyuncs.com/home_background_2.jpg');

  .title {
    font-family: 'Avenir LT 65 Medium';
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 60px;
  }

  .tip {
    font-size: 1.5rem;
  }

  ul {
    li {
      padding: @space 0;

      a {
        text-decoration: none;
        font-family: 'Geomanist-Light';
        font-style: italic;
        font-size: 1.5rem;
        color: @color-links;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
