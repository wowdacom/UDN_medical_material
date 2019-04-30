<template>
  <div class="page14 theme3">
    <div class="top">
      <div class="top-left">
        <img src="@/../public/images/index_page14_Quote_img.jpg" alt="">
      </div>
      <div class="top-right">
        <h4>朱顯光：</h4>
        <p>台灣醫療改革基金會副執行長</p>
      </div>
    </div>
    <div class="quote">
      <p><span class="mark">“健保署相關官員雖然瞭解比價網上部分自費醫材價格高低不一，手術縫合閉合器價差竟可高達一二十倍，卻只是打電話至醫療院所聊一聊，未能細究原因，積極處理規範，等於自廢武功。”</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page14',
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

.page14 {
  padding: 38px 0 154px;
}
</style>
