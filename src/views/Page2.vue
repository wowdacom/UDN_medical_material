<template>
  <div class="page2 theme1">
    <div class="image-wrapper">
      <img src="@/../public/images/index_page2_article_img.jpg" alt="">
    </div>
    <div class="content-wrapper">
      <p>為了切除外痣的50幾歲李姓婦人，術前趴在手術檯上，醫護人員當場拆掉「雙極電外科器械」塑膠封套，意味著這是全新的，為此，她自費2、3萬元支付此醫材費用，但果真如此嗎？眼前看到的，就一定是事實嗎？</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page2',
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
.page2 {
  
}
</style>
