<template>
  <div class="page5 theme2">
    <div class="right">
      <p>其中11家醫院低於8,000元，<span class="mark">台大醫院</span>僅需6,875元，位居低價排行榜的第9名。</p>
    </div>  
    <div class="left">
      <div class="row">
        <div class="img-wrapper">
          <img src="@/../public/images/index_page5_article_chart.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page5',
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
.page5 {
  .left {
    margin-top: 20px;
  }
}
</style>
