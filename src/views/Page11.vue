<template>
  <div class="page11">
    <h1>Its Page11</h1>
  </div>
</template>

<script>
export default {
  name: 'page11',
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
.page11 {

}
</style>
