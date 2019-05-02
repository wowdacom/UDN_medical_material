<template>
  <div class="page10">
    <h5 class="content-title">
        若一次性手術醫材被重複使用，會出現哪些問題？
    </h5>
    <img src="@/../public/images/index_page10_article_img.jpg" alt="">
    <div class="content-wrapper">
      <h5 class="content-subtitle">消毒不完全，恐有血液疾病交叉感染風險</h5>
      <br>
      <p>中國醫藥大學新竹附設醫院外科部主任李博彰舉例，超音波刀前端會沾黏病人血液及組織，其前端結構精細又有死角，消毒難完全，重複使用難保有愛滋等血液疾病交叉感染可能。</p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'page10',
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
.page10 {
  padding: 38px 0px 154px;
  @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    padding: 81px 0px 198px;
  }
  @media screen and (min-width: 1024px) {
    padding: 137px 25px 257px;
  }
  &::after {
    content: '';
    clear: both;
  }
  .content-title, .content-wrapper {
    @media screen and (min-width: 1024px) {
      float: right;
      width: 50%;
      padding-top: 45px;
    }
  }
  .content-title {
    font-weight: bold;
  }
  img {
    width: 100%;
    padding: 48px 0 38px;
      @media screen and (max-width: 374px) {
        padding: 30px 0;
      }
      @media screen and (min-width: 768px) {
        padding: 53px 0 30px;
      }
      @media screen and (min-width: 1024px) {
        padding: 0px;
        float: left;
        width: 50%;
      }
    }
  .content-wrapper {
    .content-subtitle {
      color: #f02d3a;
      @media screen and (min-width: 1024px) {
        margin-top: 33px;
      }
    }
  }
}
</style>
