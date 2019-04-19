<template>
  <div class="page2">
    <h1>Its Page2</h1>
  </div>
</template>

<script>
export default {
  name: 'page2',
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
.page2 {

}
</style>
