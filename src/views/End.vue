<template>
  <div class="end">
    <h1>Its Page2</h1>
  </div>
</template>

<script>
export default {
  name: 'end',
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
.end {

}
</style>