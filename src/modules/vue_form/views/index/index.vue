<template>
  <Form>
    <CellGroup>
      <Field
        v-model="formData.name"
        label="用户名"
        placeholder="请输入用户名"
      />
      <Field
        v-model="formData.password"
        label="密码"
        placeholder="请输入密码"
      />
      <Button type="primary" @click="onSubmit">提交</Button>
    </CellGroup>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, CellGroup, Field, Button } from 'vant'

const formData = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  if (!formData.name) {
    App.interface.alert('请输入用户名')
    return
  }

  if (!formData.password) {
    App.interface.alert('请输入密码')
    return
  }

  App.request({
    url: '/login',
    method: 'GET',
  }).then(() => {
    App.interface.toast('提交成功')
  })
}
</script>
