<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title">Make firends with me</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 d-flex justify-content-center">
          <img class="portrait" src="@/assets/images/avatar.jpg" alt="Henri">
          <div class="brief-introduction">
            <p>Screen name: 漫长。</p>
            <p>Age: {{ currentAge }}</p>
            <p>Region: Shanghai</p>
          </div>
        </div>
        <div class="col-lg-8 d-flex">
          <ul class="personal-links">
            <li>
              <a rel="noopener noreferrer" href="mailto:henrizhang@henri.ren">
                <img class="icon" src="@/assets/icons/email.svg" alt="email">
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://github.com/Henri-Zhang" target="_blank">
                <img class="icon" src="@/assets/icons/github.svg" alt="github">
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.zhihu.com/people/zhang-heng-78-10/activities"
                target="_blank"
              >
                <img class="icon" src="@/assets/icons/zhihu.svg" alt="zhihu">
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank">
                <div class="popover">
                  <div class="arrow"/>
                  <img alt="Wechat QR code" src="@/assets/images/WechatQR.jpeg">
                </div>
                <img class="icon" src="@/assets/icons/wechat.svg" alt="wechat">
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://user.qzone.qq.com/371595867"
                target="_blank"
              >
                <img class="icon" src="@/assets/icons/qzone.svg" alt="qzone">
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://weibo.com/5214776283/profile"
                target="_blank"
              >
                <img class="icon" src="@/assets/icons/weibo.svg" alt="weibo">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="copyright">
            <span>© {{currentYear}} henri.ren All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import numeral from 'numeral';

export default {
  name: 'Footer',
  data() {
    return {
      currentYear: moment().format('YYYY'),
      currentAge: numeral(moment.duration(moment() - moment('1994-07-18')).asYears()).format(
        '0.000',
      ),
    };
  },
  components: {},
};
</script>

<style lang="less" scoped>
</style>

