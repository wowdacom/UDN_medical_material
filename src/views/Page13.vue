<template>
  <div class="page13">
    <h1>Its Page13</h1>
  </div>
</template>

<script>
export default {
  name: 'page13',
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
.page13 {

}
</style>
