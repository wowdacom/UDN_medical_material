<template>
  <div class="page6 theme2">
    <div class="right">
      <p>最便宜的是委託彰化秀傳醫療體系所經營的 <span class="mark">台南市立醫院</span> ，患者僅需自費3,000元；而價格最高的是桃園敏盛綜合醫院，自費價格高達47,500元，價格幾乎為台南市立醫院的16倍。</p>
    </div>  
    <div class="left">
      <div class="row">
        <div class="img-wrapper">
          <img src="@/../public/images/index_page6_article_chart.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page6',
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
.page6 {
  .left {
    @media screen and (min-width: 1024px) {
      margin-top: 107px;
    }
  }
  .img-wrapper {
    @media screen and (min-width: 1024px) {
      width: 90%;
    }
  }
}
</style>
