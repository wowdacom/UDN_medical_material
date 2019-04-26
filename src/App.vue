<template>
  <div id="app">
    <div class="page" :class="{enterBackground: isEnter}">
      <div class="logo-subtitle">
        <i class="udn-icon udn-icon-logo"></i><span class="subtitle">白色巨塔謊言</span>
      </div>
      <div class="container headerContent">
        <div class="col">
          <header class="header">
          
          <h1 class="main-title">
            黑心二手醫材<br>病患自費成冤大頭
          </h1>
          <div class="nav-warpper">
            <ul class="lists">
              <li class="list" :key="item.page" v-for="item in nav">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </header>
        </div>
      </div>
      <div class="container">
        <div class="col">
        <div class="routerWrapper">
          <transition  mode="out-in" :name="shiftPosition">   
              <router-view />
          </transition>
        </div>
        </div>
      </div>
      <div class="container footerContent">
        <div class="col">
          <footer class="footer">
          
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from './router'
import _debounce from 'lodash.debounce'
import Hammer from  'hammerjs'

export default {
  name: 'app',
  data () {
    return {
      totalpage: 3,
      currentpage: 0,
      currentpageName: '',
      isEnter: true,
      pages: [
        {
          path: '/',
          name: 'enter'
        },
        {
          path: '/1',
          name: 'page1'
        },
        {
          path: '/2',
          name: 'page2'
        },
        {
          path: '/3',
          name: 'page3'
        },
        {
          path: '/4',
          name: 'page4'
        },
        {
          path: '/5',
          name: 'page5'
        },
        {
          path: '/6',
          name: 'page6'
        },
        {
          path: '/7',
          name: 'page7'
        },
        {
          path: '/8',
          name: 'page8'
        },
        {
          path: '/9',
          name: 'page9'
        },
        {
          path: '/10',
          name: 'page10'
        },
        {
          path: '/11',
          name: 'page11'
        },
        {
          path: '/12',
          name: 'page12'
        },
        {
          path: '/13',
          name: 'page13'
        },
        {
          path: '/14',
          name: 'page14'
        },
        {
          path: '/15',
          name: 'page15' 
        },
        {
          path: '/16',
          name: 'page16' 
        },
        {
          path: '/end',
          name: 'end'
        }
      ],
      nav: [
        {
          page: '/1',
          title: '拋棄式醫材重複用',
          isTrack: true
        },
        {
          page: '/4',
          title: '自費醫材價差黑幕',
          isTrack: false
        },
        {
          page: '/7',
          title: '黑心醫院重複使用10次',
          isTrack: false
        },
        {
          page: '/8',
          title: '台大醫曝真相',
          isTrack: false
        },
        {
          page: '/10',
          title: '感染愛滋風險',
          isTrack: false
        },
        {
          page: '/11',
          title: '病人如待宰羔羊',
          isTrack: false
        },
        {
          page: '/15',
          title: '民眾如何自保',
          isTrack: false
        },
        {
          page: '/17',
          title: '政府能解決嗎',
          isTrack: false
        },
      ],
      shiftPosition: 'fadeLeft'
    }
  },
  created () {

  },
  mounted () {
    
    //設定監聽的 element
    let vm =this
    const routerWrapper = document.querySelector('.routerWrapper');
    const hammertime = new Hammer(routerWrapper);
    hammertime.on('swipe', vm.onSwipe);
  },
  destroyed() {

  },
  methods: {
    onSwipe: _debounce(function(event){
      let vm  = this
      if (vm.currentpage < vm.pages.length - 1 && event.direction == 2) {
        
        vm.shiftPosition = 'fadeLeft'
        vm.currentpage += 1
            
      }
      if (vm.currentpage > 0 && event.direction == 4) {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1      
      }
      router.push(vm.pages[vm.currentpage].path)
      event.preventDefault();
    }, 500),
    jumpPage (whichPage, whichPageIndex) {
      router.push(whichPage)
    }
  },
  watch: {
    // currentpage: function (newValue) {
    //   this.pages.forEach(function(item, index){
    //     if(index < newValue + 1) {
    //       item.isTrack = true
    //     } else {
    //       item.isTrack = false
    //     }
    //   })
    // },
    '$route' (to, from) {
      // 應該物件去
      let vm = this
      vm.pages.forEach(function(item, index){
        if(item.page == to.path) {
          vm.currentpage = index
        }
      })
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

html {
      height: 100%;
}
#app {
  .page {
    .logo-subtitle {  
      line-height: 40px;
      .udn-icon-logo{
        vertical-align: middle;
        font-size: 26px;
        color: #000;
        transition: transform 288ms ease-in;
        transform: rotate(0deg);
        text-decoration: none;
        cursor: pointer;
        &:hover{
          transform: rotate(16deg);
        }
      }
      .subtitle {
        font-size: 12px;
        
      }
    }
    .headerContent {
      border-bottom: solid 0.5px #9a9a9a;
    }
    .header {
      .main-title {
        color: #d84c4c;
      }
      .nav-warpper {
        position: relative;
        min-height: 50px;
        overflow-x: scroll;
        overflow-y: hidden;
        @media screen and (max-width: 374px) {
          
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          overflow: hidden;
        }
        .lists {
          color: #9a9a9a;
          position: absolute;
          left: 0;
          display: flex;
          .list {        
            display: inline-block;
            margin: 9.5px 20px 9.5px 0;
            white-space: nowrap;
            cursor: pointer;
          }
        }
      }
    }
    .routerWrapper {
      min-height: 85vh;
      backface-visibility: hidden;
      color: white;
      .fadeLeft-enter-active {
        // transition: .5s shiftLeft;
        animation: .1s shiftLeft;
      }
      .fadeLeft-leave-active {
        // transition: .5s shiftLeft;
        animation: .1s shiftLeftOut;
      }
      // .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
      //   opacity: 0;
      // }
      @keyframes shiftLeft{
        0% {
          transform: translateX(150%);    
        }
        100% {
          transform: translateX(0%);
        }
      }
      @keyframes shiftLeftOut{
        0% {
          transform: translateX(0%);    
        }
        100% {
          transform: translateX(-150%);
        }
      }
      .fadeRight-enter-active {
        animation: .1s shiftRight;
      }
      .fadeRight-leave-active {
        animation: .1s shiftRightOut;
      }
      .fadeRight-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
      @keyframes shiftRight{
        0% {
          transform: translateX(-150%);    
        }
        100% {
          transform: translateX(0%);
        }
      }
      @keyframes shiftRightOut{
        0% {
          transform: translateX(0%);    
        }
        100% {
          transform: translateX(150%);
        }
      }
    }
  }
  .enterBackground {
    background-size: cover;
    background-image: url("../public/images/index_cover_mob.jpg");
    background-repeat: no-repeat;
    @media screen and (max-width: 374px) {
      
    }
    @media screen and (min-width: 768px) {
      background-image: url("../public/images/index_cover_web.jpg");
    }
    @media screen and (min-width: 1024px) {
      background-image: url("../public/images/index_cover_web.jpg");
    }
  }
  
}
</style>
