<template>
  <div class="page4">
    <h1>Its Page4</h1>
  </div>
</template>

<script>
export default {
  name: 'page4',
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
.page4 {

}
</style>
