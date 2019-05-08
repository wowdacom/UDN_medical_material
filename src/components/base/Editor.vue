<template>
  <div id="editor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Editor'
}
</script>

<style scoped>
  #editor{
    color: black;
    font-weight: normal;
    font-size: 15px;
  }
</style>
