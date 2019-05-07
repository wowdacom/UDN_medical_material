<template>
  <div id="app">
    <div class="page" :class="{enterBackground: isEnter, endBackground: isEnd}">
      <div class="indicator" :style="{width: indicatorWidth + '%' }" ></div>
      <div class="logo">
        <a @click="handleGA" href=".">
          <i  class="udn-icon udn-icon-logo" ></i>
        </a>
      </div>
      <div class="headerContent">
        <div class="container">
          <header class="header">
            <div  v-if="isEnter" class="subtitle">揭開白色巨塔謊言</div>
              <div class="main-title">
                黑心二手醫材 病患自費成冤大頭
              </div>
              <!-- <i class="nav-arrow nav-arrow-left i-arrow4-left" @click="scrollXContral('left')"></i> -->
                <div ref="nav" class="nav-warpper">
                  
                  <ul ref="lists" class="lists">
                    <li class="list" :class="{isFocus: item.isTrack}" @click="navClickHandle(item.page)" :key="item.page" v-for="item in nav">
                      {{ item.title }}
                    </li>
                  </ul>
                  
                </div>
              <!-- <i class="nav-arrow nav-arrow-right i-arrow4-right" @click="scrollXContral('right')"></i> -->
            </header>
        </div>
      </div>
      
      <div class="SectionContent">
        <div class="routerWrapper">
          <transition  mode="out-in" :name="shiftPosition">   
              <router-view @changeRoute="changeBackground" />
          </transition>
        </div>
      </div>
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
      href: 'https://udn.com/upf/newmedia/2019_data/medical_material/',
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
          path: '/end',
          name: 'end'
        }
      ],
      nav: [
        {
          page: '/',
          range: [0, 1],
          title: '你的手術醫材是二手貨',
          isTrack: true
        },
        {
          page: '/2',
          range: [2],
          title: '黑心醫院重複使用10次',
          isTrack: false
        },
        {
          page: '/3',
          range: [3],
          title: '病患恐感染血液疾病',
          isTrack: false
        },
        {
          page: '/end',
          range: [4],
          title: '術前你該如何自保',
          isTrack: false
        }
      ],
      shiftPosition: 'fadeLeft',
      indicatorWidth: 0
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
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Swipe",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [滑動下一頁]"
        })
        event.preventDefault();
      }
      if (vm.currentpage > 0 && event.direction == 4) {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1
        router.push(vm.pages[vm.currentpage - 1].path)
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Swipe",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [滑動上一頁]"
        })
        event.preventDefault();   
      }
    
    }, 500),
    changePage: function(position){
      let vm  = this
      if (vm.currentpage < vm.pages.length && position === 'next') {
        vm.shiftPosition = 'fadeLeft'
        if( vm.currentpage === 0 ) {
          vm.currentpage += 1
        }
        vm.currentpage += 1
        this.jumpPage(vm.pages[vm.currentpage - 1].path)
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Swipe",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [點擊上一頁]"
        })
        event.preventDefault();
      }
      if (vm.currentpage > 0 &&  position === 'last') {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1 
        this.jumpPage(vm.pages[vm.currentpage - 1].path)
        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Swipe",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [點擊下一頁]"
        })
        event.preventDefault();     
      }
    },
    navClickHandle (whichPage) {
      let page = whichPage.split("/")[1] === "" ? 1 :  whichPage.split("/")[1]

      window.ga("newmedia.send", {
          "hitType": "event",
          "eventCategory": "Anchor",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [錨點第" + page + "頁]"
      })
      this.jumpPage(whichPage)
    },
    jumpPage (whichPage) {
      
      router.push(whichPage)
    },
    measureIndicator () {
      this.indicatorWidth = 100 / this.pages.length * this.currentpage
    },
    navControl (currentPage) {
      let vm = this
      let currentScrollPosition = this.$refs['nav'].scrollLeft
      let scrollWidth = this.$refs['lists'].offsetWidth / this.nav.length

      this.nav.forEach(function(item, index){
        if (item.range[0] <= currentPage && currentPage <= item.range[1] ) {
          vm.nav[index].isTrack = true
          vm.$refs['nav'].scrollLeft = scrollWidth * index
        } else {
          vm.nav[index].isTrack = false
        }
      })
      console.log(currentPage)
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
      this.measureIndicator()
      this.navControl(this.currentpage)
      let page = this.currentpage === 0 ? 1 : this.currentpage
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Read",
        "eventAction": "Click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + page + "頁閱讀]"
      })
    },
    LineShare (href) {
        let page = this.currentpage === 0 ? 1 : this.currentpage

          ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + page + "頁 line share]"
          })
          if (Utils.detectMob()) {
            // 手機
            window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + href)
          } else {
            window.open("https://lineit.line.me/share/ui?url=" + href)
          }
    },
    FacebookShare (href) {
      let page = this.currentpage === 0 ? 1 : this.currentpage
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Facebook Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + page + "頁 facebook share]"
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
      let scrollWidth = this.$refs['lists'].offsetWidth / this.nav.length
      if (direction === 'left') {
        this.$refs['nav'].scrollLeft = currentScrollPosition - scrollWidth
      }
      if (direction === 'right') {
        this.$refs['nav'].scrollLeft = currentScrollPosition + scrollWidth
      }
    },
    handleGA (event) {
      window.ga("newmedia.send", {
          "hitType": "event",
          "eventCategory": "Logo",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [聯Logo點擊]"
      })
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
      overflow-x: hidden;
      background-color: #333333;
}
#app {
  .indicator {
    height: 2px;
    background-color: #d84c4c;
    transition: 1s all;
  }
  .page {
    background-color: white;
    .logo {  
      line-height: 40px;
      color: white;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 20;
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
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      background-color: #333333;
      border-bottom: solid 2px #757575;
      .header {
          position: relative;
          .subtitle {
            font-size: 12px;
            padding-top: 37px;
            @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
              
            }
            @media screen and (min-width: 1024px) {
              font-size: 55px;
            }
          }
          .main-title {
            font-size: 20px;
            color: #333333;
            font-weight: bold;
            padding-bottom: 20px;
            margin: 0px;
            @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
              font-size: 26px;
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
              bottom: 0px;
              z-index: 30;
              display: flex;
              margin: 0;
              .list {        
                display: inline-block;
                padding: 9.5px 0px 9.5px;
                margin-right: 40px;
                white-space: nowrap;
                cursor: pointer;
              }
              .isFocus {
                position: relative;
                color: #ffffff;
                font-weight: bolder;
                &::after {
                  content: '';
                  position: absolute;
                  bottom: 0px;
                  left: 0;
                  display: block;
                  height: 1px;
                  width: 100%;
                  background: white;
                }
              }
            }
          }
        }
    }
    .SectionContent {
      background-color: #f2f1ed;

      .routerWrapper {
        backface-visibility: hidden;
        .fadeLeft-enter-active {
          animation: .3s shiftLeft;
        }
        .fadeLeft-leave-active {
          animation: .3s shiftLeftOut;
        }
        @keyframes shiftLeft{
          0% {
            transform: translateX(150%);
            opacity: 0; 
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes shiftLeftOut{
          0% {
            transform: translateX(0%);  
            opacity: 1;  
          }
          100% {
            transform: translateX(-150%);
             opacity: 0;
          }
        }
        .fadeRight-enter-active {
          animation: .3s shiftRight;
        }
        .fadeRight-leave-active {
          animation: .3s shiftRightOut;
        }
        .fadeRight-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
        @keyframes shiftRight{
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes shiftRightOut{
          0% {
            transform: translateX(0%); 
            opacity: 1;   
          }
          100% {
            transform: translateX(150%);
            opacity: 0;
          }
        }
      }
    }
    .footer {
      z-index: 100;
      bottom: 0;
      width: 100%;
      color: #333333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 0 47px;
      background-color: #f2f1ed;
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
    background-color: #333333;
    .logo {
      .udn-icon-logo {
        color: #ffffff;
      }
    }
    .headerContent {
      background: #333333;
      .header {
          .subtitle {
            color: #ffffff;
            font-size: 28px;
          }
          .main-title {
            font-weight: 900;
            font-size: 16px;
            color: #d84c4c;
             @media screen and (max-width: 374px) {
              
            }
            @media screen and (min-width: 768px) {
              
            }
            @media screen and (min-width: 1024px) {
             font-size: 26px;
            }
            .wrap {
              @media screen and (min-width: 1024px) {
                display: none;
              }
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

    }
    .footer {
      .next {
        display: none;
      }
    }
  }
}
</style>
