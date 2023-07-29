<template>
  <div>
    <Button>12</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from 'vant'

App.interface.toast({
  message: '1',
})
</script>

<style lang="less">
div {
  font-size: 30px;
}
</style>
