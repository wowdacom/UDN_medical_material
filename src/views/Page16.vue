<template>
  <div class="page16">
    <h1>Its Page16</h1>
  </div>
</template>

<script>
export default {
  name: 'page16',
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
.page16 {

}
</style>
