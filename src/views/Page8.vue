<template>
  <div class="page8 theme3">
    <div class="top">
      <div class="top-left">
        <img src="@/../public/images/index_page8_Quote_img.jpg" alt="">
      </div>
      <div class="top-right">
        <h4>梁金銅：</h4>
        <p>台大醫院大腸直腸科主任</p>
      </div>
    </div>
    <div class="quote">
      <p><span class="mark">“台大醫院確實重複使用「雙極電外科器械」，像是超音波刀、腹腔鏡閉合器等，出發點是為了幫患者省錢，依照院內手術管理委員會所討論出來的消毒SOP規範，徹底消毒後，使用次數最高5次。”</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page8',
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

.page8 {
  
}
</style>
