<template>
  <div class="page12">
    <h1>Its Page12</h1>
  </div>
</template>

<script>
export default {
  name: 'page12',
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
.page12 {

}
</style>
