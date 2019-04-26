<template>
  <div class="page5">
    <h1>Its Page5</h1>
  </div>
</template>

<script>
export default {
  name: 'page5',
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
.page5 {

}
</style>
