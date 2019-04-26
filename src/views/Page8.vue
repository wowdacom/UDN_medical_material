<template>
  <div class="page8">
    <h1>Its Page8</h1>
  </div>
</template>

<script>
export default {
  name: 'page8',
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
.page8 {

}
</style>
