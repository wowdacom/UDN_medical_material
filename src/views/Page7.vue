<template>
  <div class="page7">
    <h1>Its Page7</h1>
  </div>
</template>

<script>
export default {
  name: 'page7',
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
.page7 {

}
</style>
