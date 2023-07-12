<template>
  <div>1999</div>
</template>

<script lang="ts" setup>
App.request({
  url: 'login',
})
  .then((r: unknown) => {
    console.log(r, '11')
  })
  .catch((error: unknown) => {
    console.log(error, '99')
  })
</script>

<style lang="less">
div {
  font-size: 30px;
}
</style>
