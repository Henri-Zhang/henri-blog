<template>
  <footer>
    <h4 class="title">Make firends with me</h4>
    <div class="content">
      <div class="brief-introduction">
        <img class="portrait rounded-circle" src="@/assets/images/avatar.jpg" alt="Henri">
        <div class="info">
          <p>Screen name: 漫长。</p>
          <p>Age: {{ currentAge }}</p>
          <p>Region: Shanghai</p>
        </div>
      </div>
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
          <a rel="noopener noreferrer" href="https://user.qzone.qq.com/371595867" target="_blank">
            <img class="icon" src="@/assets/icons/qzone.svg" alt="qzone">
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="https://weibo.com/5214776283/profile" target="_blank">
            <img class="icon" src="@/assets/icons/weibo.svg" alt="weibo">
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <span>© {{currentYear}} henri.ren All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script lang="ts">
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
@import '~@/styles/common';

footer {
  background-color: @theme-green;
  padding: 30px 20%;

  .title {
    font-family: 'Avenir LT 65 Medium';
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .content {
    display: flex;

    .brief-introduction {
      display: flex;
      align-items: center;
      padding: 0 6 * @space;

      .portrait {
        max-height: 6rem;
        max-width: 6rem;
      }

      .info {
        display: flex;
        flex-direction: column;
        width: max-content;
        font-family: 'Avenir LT 65 Medium';
        color: white;
        margin-left: @space;

        p {
          font-weight: 600;
          margin-bottom: @space;
        }
      }
    }

    .personal-links {
      padding-top: 6 * @space;
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      li {
        position: relative;
        margin: auto;
        height: 50px;
        width: 50px;
        text-align: center;

        .popover {
          position: absolute;
          display: none;
          top: -225px;
          left: -75px;
          border: @color-links solid 2px;
          border-radius: 10px;
          background-color: white;

          .arrow {
            position: absolute;
            left: 80px;
            width: 1.6rem;
            height: 0.8rem;
            bottom: -0.8rem;

            &:before,
            &:after {
              position: absolute;
              display: block;
              content: '';
              border-color: transparent;
              border-style: solid;
              border-width: 0.8rem 0.8rem 0;
            }

            &:before {
              bottom: -1px;
              border-top-color: @color-links;
            }

            &:after {
              bottom: 1px;
              border-top-color: white;
            }
          }

          img {
            max-width: 200px;
            border-radius: 10px;
          }
        }

        .icon {
          width: 40px;
          transition: all 0.1s ease-in;
        }

        a:hover {
          .icon {
            transform: scale(1.2);
          }

          .popover {
            display: block;
          }
        }
      }
    }
  }

  .copyright {
    text-align: center;
    color: rgba(66, 66, 66, 0.8);
    border-top: rgba(255, 255, 255, 0.5) solid 2px;
    padding-top: 10px;
    margin-top: 20px;

    span:hover {
      color: black;
    }
  }
}
</style>
