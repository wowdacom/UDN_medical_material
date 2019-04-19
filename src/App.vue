<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="header">
      <ul class="timeline">
        <li class="node"
          :key="item.page"
          :class="item.isTrack ? 'track' : 'untrack' "
          v-for="item in pages"
          @click="jumpPage(item.page)">
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <transition mode="out-in" :name="shiftPosition">
          <router-view/>
      </transition>
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
      pages: [
        {
          page: '/',
          isTrack: true
        },
        {
          page: '/about',
          isTrack: false
        },
        {
          page: '/page1',
          isTrack: false
        },
        {
          page: '/page2',
          isTrack: false
        },
        {
          page: '/end',
          isTrack: false
        }
      ],
      shiftPosition: 'fadeLeft'
    }
  },
  created() {
      window.addEventListener('scroll', this.onSwipe);
  },
  destroyed() {
       window.removeEventListener('scroll', this.onSwipe);
  },
  mounted () {
    console.log(this.$route)
    let vm =this
    const app = document.querySelector('#app');
    const hammertime = new Hammer(app);
    hammertime.on('pan', vm.onSwipe);
    this.initCurrentPage()
  },
  methods: {
    onSwipe: _debounce(function(event){
      console.log(event)
      
      let vm  = this
      if (vm.currentpage < vm.pages.length - 1 && event.direction == 2) {
        
        vm.shiftPosition = 'fadeLeft'
        vm.currentpage += 1
            
      }
      if (vm.currentpage > 0 && event.direction == 4) {
        vm.shiftPosition = 'fadeRight'
        vm.currentpage -= 1      
      }
      router.push(vm.pages[vm.currentpage].page)
      event.preventDefault();
    }, 500),
    jumpPage (whichPage, whichPageIndex) {
      router.push(whichPage)
    },
    initCurrentPage () {
      console.log("hello mount")
    }
  },
  watch: {
    currentpage: function (newValue) {
      this.pages.forEach(function(item, index){
        if(index < newValue + 1) {
          item.isTrack = true
        } else {
          item.isTrack = false
        }
      })
    },
    '$route' (to, from) {
      // 應該物件去
      let vm = this
      console.log(to)
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
body {
    margin: 0;
}
#app {
  text-align: center;
  .header {
    position: fixed;
    width: 100%;
    height: 50px;
    .timeline {
      margin: auto 0;
      height: 5px;
      padding: 10px 0;
      z-index: 10;
      font-size: 0px;
      .node {
        margin: auto 0;
        display: inline-block;
        width: calc(100% / 5);
        height: 5px;
        position: relative;
        font-size: 0px;
        background-color: black;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
      .track {
        background: pink;
        &::after {
          background: red;
        }
      }
      .untrack {
        background: lightgreen;
        &::after {
          background: green;
        }
      }
    }
  }
  
  .wrapper {
    border: solid 1px #42b983;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
