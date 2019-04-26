<template>
  <div class="page1">
    <img src="@/../public/images/index_page2_article_img.jpg" alt="">
    <p>為了切除外痣的50幾歲李姓婦人，術前趴在手術檯上，醫護人員當場拆掉「雙極電外科器械」塑膠封套，意味著這是全新的，為此，她自費2、3萬元支付此醫材費用，但果真如此嗎？眼前看到的，就一定是事實嗎？</p>
  </div>
</template>

<script>
export default {
  name: 'page1',
  props: {
    msg: String
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page1 {
  padding-top: 44px;
  color: white;
  min-height: 75vh;
  @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    vertical-align: center;
    align-items: center;
  }
  img {
    margin-bottom: 26px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 50%;
      margin-right: 51px;
      margin-bottom: 0px;
    }
  }
  p {
    @media screen and (min-width: 1024px) {
          width: 50%;
    }
  }
}
</style>
