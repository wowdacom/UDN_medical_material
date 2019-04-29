<template>
  <div class="page4 theme2">
    <div class="right">
      <p>廣泛用於消化道、胸腔外科手術的「雙極電外科器械」一套費用近30,000元，但記者查詢健保署「醫材比價網」，在77家提供該項自費醫材的醫院中，卻有<span class="mark">31家</span>售價低於25,000元。</p>
    </div>  
    <div class="left">
      <div class="row">
        <div class="img-wrapper">
          <h4 class="img-title">77家醫院自費價格</h4>
          <img src="@/../public/images/index_page4_article_chart.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page4',
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

.page4 {
  
}
</style>
