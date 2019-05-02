<template>
  <div class="page3 theme1">
    <div class="image-wrapper">
      <img src="@/../public/images/index_page3_article_img.jpg" alt="">
    </div>
    <div class="content-wrapper">
      <p>「雙極電外科器械」用途廣泛，小至切除痔瘡、大至消化道、胸腔外科等手術，甚至肺部、乳房、泌尿道等腫瘤切除，都會派上用場，以能量燒灼方式達到止血效果，被列為拋棄式、一次性使用的手術耗材。在食藥署藥證中清楚寫著「單次使用器械」，廠商在外包裝也有標示「single patient use」，但許多醫療院所卻在消毒殺菌後重複使用。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page3',
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
.page3 {

}
</style>
