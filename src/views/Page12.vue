<template>
  <div class="page12">
    <h4 class="content-subtitle">收費不一致，病患真的省到錢了嗎？</h4>
    <p>台灣內視鏡外科理事長、高雄榮總一般外科主任陳以書坦言，多年前就曾爆出醫院重複使用一次性耗材，甚至有醫院訂出令人啼笑皆非的收費標準，第一名使用器材的患者收取50%的費用，第二名則收30%，以此類推，最後一名使用者因為感染風險最高，當然收費就最便宜。</p>
  </div>
</template>

<script>
export default {
  name: 'page12',
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
.page12 {
  padding: 38px 0 154px;
  .content-subtitle {
    color: #f02d3a;
  }
}
</style>
