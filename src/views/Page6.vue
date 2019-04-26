<template>
  <div class="page6">
    <h1>Its Page6</h1>
  </div>
</template>

<script>
export default {
  name: 'page6',
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
.page6 {

}
</style>
