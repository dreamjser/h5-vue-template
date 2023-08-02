<template>
  <div>
    <Button>12</Button>
    <PasswordInput />
    <Dialog />
  </div>
</template>

<script lang="ts" setup>
import { Button, PasswordInput, Dialog } from 'vant'

App.interface.toast({
  message: '1',
})
</script>

<style lang="less">
div {
  font-size: 30px;
}
</style>
