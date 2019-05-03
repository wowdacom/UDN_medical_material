<template>
  <div class="page17 theme-default">
    <h4><span class="mark">政府規範</span></h4>
  </div>
</template>

<script>
export default {
  name: 'page17',
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
.page17 {

  h4 {
    margin-bottom: 26px;
  }
  .mark {
    background-color: #e0dfd5;
    color: black;
  }
}
</style>
