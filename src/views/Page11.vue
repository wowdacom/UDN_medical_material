<template>
  <div class="page11 theme-default">
    <h4 class="content-subtitle">
      術前不知情，病患成手術台上的待宰羔羊
    </h4>
    <br>
    <p>令人毛骨悚然的是，絕大部分患者不知道自己使用「二手醫材」，陳姓護理師說，患者術前接受麻醉，披上手術被單，推至手術台，術後醒來怎會知道自己用過了哪些器械，而這也是部分醫院肆無忌憚地重複使用一次性手術耗材的主因。</p>
  </div>
</template>

<script>
export default {
  name: 'page11',
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
.page11 {

}
</style>
