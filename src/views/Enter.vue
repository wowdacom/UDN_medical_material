<template>
  <div class="enter">
    <p>你能想像花大錢使用的自費手術醫材，竟是「二手貨」？《聯合報》調查發現，不少外科手術器械為一次性耗材，但許多醫院會私下消毒後重複使用，使用次數高達5到10次，而且躺在手術檯上的病人根本不知情。</p>
    <br>
    <p>重複使用一次性耗材，不僅會造成感染風險，對患者也極不公平。本報記者走訪醫院調查，並挖掘健保署「自費醫材比價網」資料，揭開醫院使用二手醫材黑幕。</p>
  </div>
</template>

<script>

export default {
  name: 'enter',
  components: {

  },
  mounted () {
    this.$emit('changeRoute', this.$route);
  }
}
</script>
<style scoped lang="scss">
.enter {
  padding-top: 44px;
  @media screen and (max-width: 374px) {
          
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1024px) {
    margin-top: 122px;
  }
  p {
    color: white;
  }
}
</style>
