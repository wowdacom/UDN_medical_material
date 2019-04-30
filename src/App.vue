<template>
  <div id="app">
    <div class="page" :class="{enterBackground: isEnter}">
      <div class="logo">
        <i class="udn-icon udn-icon-logo" ></i>
      </div>
      <div class="container headerContent">
        <div class="col">
          <header class="header">
          <div class="subtitle">白色巨塔謊言</div>
          <h1 class="main-title">
            黑心二手醫材<br>病患自費成冤大頭
          </h1>
          <div class="nav-warpper">
            <ul class="lists">
              <li class="list" @click="jumpPage(item.page)" :key="item.page" v-for="item in nav">
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
              <router-view @changeRoute="changeBackground" />
          </transition>
        </div>
        </div>
      </div>
      <footer class="footer">
        <div @click="changePage('last')" class="last"><i class="arrow arrow-left i-arrow4-left"></i><span class="last-ch">上一頁</span></div>
        <div class="share">
          <i class="line i-line"></i><i class="facebook i-facebook-1"></i>
        </div>
        <div @click="changePage('next')" class="next"><span class="next-ch">下一頁</span><i class="arrow arrow-right i-arrow4-right"></i></div>
      </footer>
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
          page: '/',
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
      console.log("onSwipe:", this.currentpage)
      router.push(vm.pages[vm.currentpage - 1].path)
      event.preventDefault();
    }, 500),
    changePage: function(position){
      let vm  = this
      if (vm.currentpage < vm.pages.length - 1 && position === 'next') {
        vm.shiftPosition = 'fadeLeft'
        vm.currentpage += 1  
      }
      if (vm.currentpage > 0 &&  position === 'last') {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1      
      }
      router.push(vm.pages[vm.currentpage - 1].path)
      event.preventDefault();
      console.log("changePage:", this.currentpage)
    },
    jumpPage (whichPage, whichPageIndex) {
      router.push(whichPage)
      console.log("jumpPage:", this.currentpage)
    },
    changeBackground: function(routeInfo){
      this.currentpage = Number(routeInfo.path.split("/")[1]) === 0 ? 1 : Number(routeInfo.path.split("/")[1])
      
      console.log("changeBackground:", this.currentpage)
      if ( routeInfo.name == 'enter' || routeInfo.name == 'end') {
        this.isEnter = true
      } else {
        this.isEnter = false
      }
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

    //  let pathNumber = Number(to.path.split("/")[1])
    // this.currentpage = pathNumber
    //  if ( pathNumber === "" ) {
    //    this.currentpage = 0
    //  } else {
    //    this.currentpage = pathNumber
    //  }
      // 應該物件去
      // let vm = this
      // if ( to.name !== 'page1' || to.name !== 'end') {
      //   this.isEnter = false
      // } else {
      //   this.isEnter = true
      // }
      // vm.pages.forEach(function(item, index){
      //   if(item.page == to.path) {
      //     vm.currentpage = index
      //   }
      // })
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
    background-color: #f2f1ed;
    .logo {  
      line-height: 40px;
      color: white;
      position: fixed;
      left: 0;
      top: 0;
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
      
    }
    .headerContent {
      &::after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 0.5px;
        left: 0;
        background-color: #9a9a9a;
      }
      .col {
        .header {
          .subtitle {
            font-size: 12px;
            padding-top: 15px;
            @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
              
            }
            @media screen and (min-width: 1024px) {
              font-size: 15px;
            }
          }
          .main-title {
            color: #d84c4c;
          }
          .nav-warpper {
            position: relative;
            min-height: 50px;
            overflow-x: scroll;
            overflow-y: hidden;
            font-weight: bold;
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
      }
    }
    .routerWrapper {
      min-height: 85vh;
      backface-visibility: hidden;
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
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      color: #333333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 47px;
      @media screen and (max-width: 374px) {
                
      }
      @media screen and (min-width: 768px) {
        
      }
      @media screen and (min-width: 1024px) {
        padding-bottom: 53px;
        justify-content: center;
      }
      .line, .facebook {
        font-size: 21px;
        cursor: pointer;
      }
      .arrow {
        font-size: 15px;
        cursor: pointer;
      }
      .last {
        padding-left: 20px;
        @media screen and (max-width: 374px) {
                
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:hover > .last-ch, &:hover > .arrow-left {
            color: rgba(#e0dfd5, 1);
        }
        .last-ch {
          @media screen and (max-width: 374px) {
                  
          }
          @media screen and (min-width: 768px) {
            
          }
          @media screen and (min-width: 1024px) {
            position: fixed;
            bottom: -30px;
            left: 50%;
            transform: translate(-50%);
          }
          
          color: rgba(#e0dfd5, 0.5);
          cursor: pointer;
          &:hover {
            color: rgba(#e0dfd5, 1);
          }
        }
        .arrow-left {
          color: rgba(#e0dfd5, 0.5);
          &:hover {
            color: rgba(#e0dfd5, 1);
          }
          @media screen and (max-width: 374px) {
                  
          }
          @media screen and (min-width: 768px) {
            
          }
          @media screen and (min-width: 1024px) {
            font-size: 80px;
          }
        }
      }
      .next {
        padding-right: 20px;
        @media screen and (max-width: 374px) {
                
        }
        @media screen and (min-width: 768px) {
          
        }
        @media screen and (min-width: 1024px) {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:hover > .next-ch, &:hover > .arrow-right {
            color: rgba(#e0dfd5, 1);
        }
        .next-ch {
          @media screen and (max-width: 374px) {
                  
          }
          @media screen and (min-width: 768px) {
            
          }
          @media screen and (min-width: 1024px) {
            position: fixed;
            bottom: -30px;
            left: 50%;
            transform: translate(-50%);
          }    
          color: rgba(#e0dfd5, 0.5);
          cursor: pointer;
        }
        .arrow-right {
          color: rgba(#e0dfd5, 0.5);
          @media screen and (max-width: 374px) {
                  
          }
          @media screen and (min-width: 768px) {
            
          }
          @media screen and (min-width: 1024px) {
            font-size: 80px;
          }
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
    .logo {
      .udn-icon-logo {
        color: #ffffff;
      }
    }
    .headerContent {
      &::after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 0.5px;
        left: 0;
        background-color: #9a9a9a;
      }
      .col {
        .header {
          .subtitle {
            color: #ffffff;
          }
        }
      }
    }
    
    .footer {
      color: #ffffff;
      background-color: black;
      .line, .facebook {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
  
}
</style>
