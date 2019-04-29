<template>
  <div class="indicator" :style="{opacity: opacity}">
    <div class="indicator-bar" :style="{width: progress + '%', backgroundColor: setProps('color')}"></div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import setProps from '@/mixin/setProps.js'
import _debounce from 'lodash.debounce'
import _throttle from 'lodash.throttle'

export default {
  name: 'Indicator',
  mixins: [setProps],
  props: {
    color: {
      type: String,
      default: '#bf2923'
    },
    jsonProps: {
      type: Object,
      default: null
    },
    currentQuestion: {
      type: Number
    }
  },
  data () {
    return {
      progress: 0,
      opacity: 0,
      readProgress: 0,
      questionNow: 1
    }
  },
  methods: {
    handelScroll: function() {
      let currentH = window.pageYOffset
      let totalH = document.body.scrollHeight - window.innerHeight
      this.progress = ((currentH / totalH) * 100).toFixed(2)
      currentH < 2 ? this.opacity = 0 : this.opacity = 1
    }
  },
  watch: {
    currentQuestion: function (value) {
      console.log('題目：', value)
      this.currentQuestion = value
    },
    readProgress: function (value) {
      this.readProgress = value
    },
    progress: function (value) {
      let readProgress = 0
      if (Math.floor(value / 10) > readProgress) {
        let label = "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [第" + this.currentQuestion + "題][" + Math.floor(value / 10) + "%]"

        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "read",
            "eventAction": "scroll",
            "eventLabel": label
          })

        readProgress = Math.floor(value / 10)
        this.readProgress = readProgress
      }
      this.progress = value
    }
  },
  mounted () {
    let vm = this
    window.addEventListener('scroll', this.handelScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>

<style lang="scss" scoped>
  .indicator{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 2px;
    z-index: 9999;
    opacity: 0;
    transition: opacity 222ms ease;
    background-color: rgba(253, 229, 229, 0.1);
  }
  /* Default Bar Color */
  .indicator-bar{
    width: 0;
    height: 2px;
    background-color: rgba(#bf2923, 0.1);
  }
</style>
