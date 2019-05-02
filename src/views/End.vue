<template>
  <div class="end">
    <div class="left">
      <editor>
        <div>製作人：蔡佩蓉</div>
        <div>視覺設計：張心慈</div>
        <div>插畫：黃微庭</div>
        <div>網頁製作：胡凈悟</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.05.13</div>
      </editor>
      <Share href="https://udn.com/upf/newmedia/2019_data/digital_privacy/quiz/index.html"></Share>
    </div>
    <div class="right">
      <Relate title="你可能想知道"
        href1="https://udn.com/news/story/6656/3455275?from=udn-referralnews_ch2artbottom" :img1="require('@/../public/images/index_pageEND_read_img1.jpg')" text1="醫療器材重新消毒再用 你用的手術醫材安全嗎？" 
        href2="https://udn.com/news/story/6656/3527582" :img2="require('@/../public/images/index_pageEND_read_img2.jpg')" text2="自費醫療三不管 醫改會：上傳健保防弊端" >
     </Relate>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'end',
  props: {
    msg: String
  },
  mounted () {
    this.$emit('changeRoute', this.$route);
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.end {
  padding: 104px 0 59px;
   @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 160px 0 154px;
  }
  .left, .right {
    @media screen and (max-width: 374px) {
          
    }
    @media screen and (min-width: 768px) {
      
    }
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }
  .left {
    padding: 0 0 55px 0;
  }
  .right {
    position: relative;
    padding: 55px 0 0 0;
    &::after {
        content: '';
        width: 100%;
        height: 0.5px;
        display: inline-block;
        background-color: #e3e3e3;
        position: absolute;
        left: 0;
        top: 0;
      }
    @media screen and (min-width: 1024px) {
      padding: 0 53px;
      &::after {
        content: '';
        height: 100%;
        width: 0.5px;
        display: inline-block;
        background-color: #e3e3e3;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
