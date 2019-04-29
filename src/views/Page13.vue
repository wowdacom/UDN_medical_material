<template>
  <div class="page13 theme3">
    <div class="top">
      <div class="top-left">
        <img src="@/../public/images/index_page13_Quote_img.jpg" alt="">
      </div>
      <div class="top-right">
        <h4>滕西華：</h4>
        <p>民間監督健保聯盟發言人</p>
      </div>
    </div>
    <div class="quote">
      <p><span class="mark">“如果醫院的出發點是為了幫病人省錢，前提是這款醫材是允許重複使用的。若重複使用可能造成感染，病患在這裡省小錢，將來卻可能付出更大的健康代價！”</span></p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'page13',
  props: {
    msg: String
  },
  mounted () {
    this.$emit('changeRoute', this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/baseSCSS/theme.scss';

.page13 {

}
</style>
