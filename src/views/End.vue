<template>
  <div class="end">
    <editor>
      <div>製作人：蔡佩蓉</div>
      <div>視覺設計：張心慈</div>
      <div>插畫：黃微庭</div>
      <div>網頁製作：胡凈悟</div>
      <div>監製：林秀姿、潘如瑩、董谷音</div>
      <div>2019.03.25</div>
    </editor>
    <!-- <logo></logo> -->
    <Share href="https://udn.com/upf/newmedia/2019_data/digital_privacy/quiz/index.html"></Share>
    <Relate title="延伸閱讀"
        href1="https://udn.com/news/story/6656/3455275?from=udn-referralnews_ch2artbottom" :img1="require('@/../public/images/index_pageEND_read_img1.jpg')" text1="網上不能「詆毀」蔡總統 國安局緊盯你我臉書" 
        href2="https://udn.com/news/story/6656/3527582" :img2="require('@/../public/images/index_pageEND_read_img2.jpg')" text2="政院修法阻假訊息 藍委：用刑罰製造寒蟬效應" >
     </Relate>
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

}
</style>
