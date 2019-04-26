<template>
  <div class="page9">
    <h1>Its Page9</h1>
  </div>
</template>

<script>
export default {
  name: 'page9',
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
.page9 {

}
</style>
