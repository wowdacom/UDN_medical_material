<template>
  <div class="page7 theme1">    
    <div class="image-wrapper">
      <img src="@/../public/images/index_page7_article_img.jpg" alt="">
      <p class="distribution">雙極電外科器械常用在腹腔鏡手術上。</p>
    </div>
    <div class="content-wrapper">
      <p>先不探究同樣醫材在不同醫院自費售價差距如此懸殊，低於出廠售價的醫院幾可認定重複使用此一次性手術耗材，只是各醫院重複使用的次數不一，有些5次，有些則可能高達10次。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page7',
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
.page7 {
  .image-wrapper {
    img {
      margin: 0;
    }
    .distribution {
      width: 100%;
      margin: 0 0 10px 0;
      color: #333333;
      font-size: 15px;
      @media screen and (max-width: 374px) {
        font-size: 12px;
      }
      @media screen and (min-width: 768px) {

      }
      @media screen and (min-width: 1024px) {
        
      }
    }
  }
}
</style>
