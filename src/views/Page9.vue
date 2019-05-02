<template>
  <div class="page9 theme-default">
    <p>梁金銅更驚爆，就他所了解，<span class="mark-pag9">台大醫院在使用一次性手術耗材時，重複使用機率僅約1成，但有些醫院則超過3成以上。</span></p>
    <p><br></p>
    <p>在北部某區域醫院手術室任職多年的陳姓護理師透露，除了骨釘、骨板、骨水泥等無法回收的醫材，以及凝血劑、止血用品等醫材，不會重複使用之外，其餘原本僅限一次使用的手術醫材，大都在消毒後多次使用。</p>
  </div>
</template>

<script>
export default {
  name: 'page9',
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
.page9 {
  .mark-pag9 {
    font-weight: bold;
  }
}
</style>
