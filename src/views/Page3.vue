<template>
  <div class="page3">
    <h1>Its Page3</h1>
  </div>
</template>

<script>
export default {
  name: 'page3',
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
.page3 {

}
</style>
