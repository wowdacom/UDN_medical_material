<template>
  <div class="page16 theme-default">
    <h4><span class="mark">醫院應揭露醫材收費細目</span></h4>
    <p>梁金銅建議，醫院應明列手術中器具收費細目，讓醫師好告知哪些為一次性、哪些可選擇一次性或多次性的耗材，費用差異，讓患者在簽署自費醫材同意書時，可自主選擇，以免後續糾紛</p>
  </div>
</template>

<script>
export default {
  name: 'page16',
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
.page16 {

  h4 {
    margin-bottom: 26px;
  }
  .mark {
    background-color: #e0dfd5;
    color: black;
  }
}
</style>
