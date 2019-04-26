<template>
  <div class="page10">
    <h1>Its Page10</h1>
  </div>
</template>

<script>
export default {
  name: 'page10',
  props: {
    msg: String
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page10 {

}
</style>
