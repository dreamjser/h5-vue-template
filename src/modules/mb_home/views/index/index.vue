<template>
  <div>
    <Button @click="onClick">12</Button>
    <PasswordInput />
    <Dialog />
  </div>
</template>

<script lang="ts" setup>
import { Button, PasswordInput, Dialog } from 'vant'

function onClick() {
  App.router.push('/mb_login/index/index')
}
</script>

<style lang="less">
div {
  font-size: 30px;
}
</style>
