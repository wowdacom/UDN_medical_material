<template>
  <div id="app">
    <div class="page" :class="{enterBackground: isEnter, endBackground: isEnd}">
      <div class="logo">
        <i class="udn-icon udn-icon-logo" ></i>
      </div>
      <div class="container headerContent">
        <div class="col">
          <div class="col">
            <header class="header">
            <div  v-if="isEnter" class="subtitle">白色巨塔謊言—</div>
              <h1 class="main-title">
                黑心二手醫材 <br class="wrap"><span v-if="isEnter">病患自費成冤大頭</span>
              </h1>
              <i class="nav-arrow nav-arrow-left i-arrow4-left" @click="scrollXContral('left')"></i>
                <div ref="nav" class="nav-warpper">
                  
                  <ul ref="lists" class="lists">
                    <li class="list" :class="{isFocus: item.isTrack}" @click="jumpPage(item.page, index)" :key="item.page" v-for="(item, index) in nav">
                      {{ item.title }}
                    </li>
                  </ul>
                  
                </div>
              <i class="nav-arrow nav-arrow-right i-arrow4-right" @click="scrollXContral('right')"></i>
            </header>
          </div>
        </div>
      </div>
      <div class="SectionContent">
        <div class="container">
          <div class="col">
            <div class="col">
              <div class="routerWrapper">
                <transition  mode="out-in" :name="shiftPosition">   
                    <router-view @changeRoute="changeBackground" />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isEnd" class="end-page-footer">
        <div class="container">
          <div class="col">
            <fb-comment  href="https://udn.com/upf/newmedia/2019_data/digital_privacy/government/index.html"></fb-comment>
          </div>
        </div>
        <foot></foot>
      </div>
      <footer class="footer">
        <div @click="changePage('last')" class="last"><i class="arrow arrow-left i-arrow4-left"></i><span class="last-ch">上一頁</span></div>
        <div class="share">
          <i @click="LineShare(href)" class="line i-line"></i><i @click="FacebookShare(href)" class="facebook i-facebook-1"></i>
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
import Utils from 'udn-newmedia-utils'
import setProps from './mixin/setProps.js'

export default {
  name: 'app',
  mixins: [setProps],
  data () {
    return {
      href: 'https://nmdap.udn.com.tw/upf/newmedia/2019_data/medical_material/',
      totalpage: 3,
      currentpage: 0,
      currentpageName: '',
      isEnter: true,
      isEnd: false,
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
          name: ['enter', 'page1', 'page2', 'page3'],
          title: '拋棄式醫材重複用',
          isTrack: true
        },
        {
          page: '/4',
          name: ['page4', 'page5', 'page6'],
          title: '自費醫材價差黑幕',
          isTrack: false
        },
        {
          page: '/7',
          name: ['page7'],
          title: '黑心醫院重複使用10次',
          isTrack: false
        },
        {
          page: '/8',
          name: ['page8', 'page9'],
          title: '台大醫曝真相',
          isTrack: false
        },
        {
          page: '/10',
          name: ['page10'],
          title: '感染愛滋風險',
          isTrack: false
        },
        {
          page: '/11',
          name: ['page11', 'page12', 'page13', 'page14'],
          title: '病人如待宰羔羊',
          isTrack: false
        },
        {
          page: '/15',
          name: ['page15', 'page16'],
          title: '民眾如何自保',
          isTrack: false
        },
        {
          page: '/17',
          name: ['end'],
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
      console.log(event)
      if (vm.currentpage < vm.pages.length && event.direction == 2) {
        
        vm.shiftPosition = 'fadeLeft'
        vm.currentpage += 1
        router.push(vm.pages[vm.currentpage - 1].path)
        event.preventDefault();
      }
      if (vm.currentpage > 0 && event.direction == 4) {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1
        router.push(vm.pages[vm.currentpage - 1].path)
        event.preventDefault();   
      }
    
    }, 500),
    changePage: function(position){
      let vm  = this
      if (vm.currentpage < vm.pages.length && position === 'next') {
        vm.shiftPosition = 'fadeLeft'
        vm.currentpage += 1
        this.jumpPage(vm.pages[vm.currentpage - 1].path)  
        event.preventDefault();
      }
      if (vm.currentpage > 0 &&  position === 'last') {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1 
        this.jumpPage(vm.pages[vm.currentpage - 1].path)
        event.preventDefault();     
      }
    },
    jumpPage (whichPage) {
      console.log(whichPage)
      router.push(whichPage)
      let vm = this
      this.nav.forEach(function(item, index){
        if (item.page === whichPage) {
          vm.nav[index].isTrack = true
        } else {
          vm.nav[index].isTrack = false
        }
      })
      console.log("jumpPage:", this.currentpage)
    },
    changeBackground: function(routeInfo){
      if ( routeInfo.name == 'enter') {
        this.isEnter = true
        this.currentpage = 0
      } else {
        this.isEnter = false
        this.currentpage = Number(routeInfo.path.split("/")[1])
      }
      if ( routeInfo.name == 'end') {
        this.isEnd = true
        this.currentpage = this.pages.length
      } else {
        this.isEnd = false
        this.currentpage = Number(routeInfo.path.split("/")[1])
      }
    },
    LineShare (href) {
          ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [line share]"
          })
          if (Utils.detectMob()) {
            // 手機
            window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + href)
          } else {
            window.open("https://lineit.line.me/share/ui?url=" + href)
          }
    },
    FacebookShare (href) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Facebook Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [facebook share]"
      })
      FB.ui(
        {
          method: 'share_open_graph',
          action_type: 'og.shares',
          action_properties: JSON.stringify({
            object: {
              'og:url': href,
              'og:title': '白色巨塔的謊言─黑心二手醫材濫用 病患自費成冤大頭',
              'og:description': '你能想像花大錢使用的自費手術醫材，竟是「二手貨」？《聯合報》調查發現，不少外科手術器械為一次性耗材，但許多醫院會私下消毒後重複使用，使用次數高達5到10次，而且躺在手術檯上的病人根本不知情。',
              'og:image': 'https://nmdap.udn.com.tw/upf/newmedia/2019_data/medical_material/meta/index_Facebook.jpg'
            }
          })
        },
        // callback
        function(response) {
          if (response && !response.error_message) {
            console.log(response);
          } else {
            console.log(response.error_message);
          }
        }
      );
    },
    scrollXContral (direction) {
      let currentScrollPosition = this.$refs['nav'].scrollLeft
      let scrollWidth = this.$refs['lists'].offsetWidth / ( this.pages.length - 1 )
      if (direction === 'left') {
        this.$refs['nav'].scrollLeft = currentScrollPosition - scrollWidth
      }
      if (direction === 'right') {
        this.$refs['nav'].scrollLeft = currentScrollPosition + scrollWidth
      }
    }
  },
  watch: {
    '$route' (to, from) {
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
    background-color: white;
    .logo {  
      line-height: 40px;
      color: white;
      position: fixed;
      left: 0;
      top: 0;
      @media screen and (max-width: 374px) {
              
      }
      @media screen and (min-width: 768px) {
        left: 11px;
        top: 11px;
      }
      @media screen and (min-width: 1024px) {

      }
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
        @media screen and (max-width: 374px) {
              
        }
        @media screen and (min-width: 768px) {
          font-size: 40px;
        }
        @media screen and (min-width: 1024px) {

        }
      }
      
    }
    .headerContent {
      background-color: #ffffff;
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
          position: relative;
          .subtitle {
            font-size: 12px;
            padding-left: 5px;
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
            font-size: 20px;
            color: #333333;
            font-weight: bold;
            padding-top: 10px;
            padding-left: 5px;
            @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
               padding-left: 0px;
              padding-top: 32px;
              font-size: 28px;
            }
            @media screen and (min-width: 1024px) {

            }

          }
          .nav-arrow {
            color: rgba(#e0dfd5, 0.5);
            cursor: pointer;
            &:hover {
              color: rgba(#e0dfd5, 1);
            }
          }
          .nav-arrow-left {
            position: absolute;
            left: -25px;
            bottom: 9%;
          }
          .nav-arrow-right {
            position: absolute;
            right: -25px;
            bottom: 9%;
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
              .isFocus {
                position: relative;
                &::after {
                  content: '';
                  position: absolute;
                  bottom: -16px;
                  left: 0;
                  display: block;
                  height: 4px;
                  width: 100%;
                  background: #333333;
                }
              }
            }
          }
        }
      }
    }
    .SectionContent {
      background-color: #f2f1ed;
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
    }
    .end-page-footer {
      padding-bottom: 100px;
    }
    .footer {
      position: fixed;
      z-index: 100;
      bottom: 0;
      width: 100%;
      color: #333333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 0 47px;
      background-color: #ffffff;
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
      background-color: transparent;
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
          .main-title {
            font-weight: 900;
            font-size: 35px;
            color: #d84c4c;
             @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
              
            }
            @media screen and (min-width: 1024px) {
              padding-top: 9px;
              font-size: 50px;
            }
            .wrap {
              @media screen and (min-width: 1024px) {
                display: none;
              }
            }
          }
          .subtitle {
            color: #ffffff;
          }
        }
      }
    }
    .SectionContent {
      background-color: transparent;
    }
    .footer {
      color: #ffffff;
      background-color: black;
      .line, .facebook {
        font-size: 36px;
        cursor: pointer;
      }
      .last {

      }
      .next {

      }
    }
  }
  .enterBackground {
    
    .footer {
      .last {
        display: none;
      }
    }
  }
  .endBackground {
    .SectionContent {
      background-size: cover;
      background-image: url("../public/images/index_cover_mob.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      @media screen and (max-width: 374px) {
        
      }
      @media screen and (min-width: 768px) {
        background-image: url("../public/images/index_cover_web.jpg");
      }
      @media screen and (min-width: 1024px) {
        background-image: url("../public/images/index_cover_web.jpg");
      }
    }
    .footer {
      .next {
        display: none;
      }
    }
  }
}
</style>
