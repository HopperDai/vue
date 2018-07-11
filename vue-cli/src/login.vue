<template>
  <div>
    <cmpHead/>
    <form action="">
      用户名：<input type="text"><br/>
      密码：<input type="password"><br/>
      <input type="button" value="登录">
      <a href="#/reg">注册</a>
    </form>
    <cmpFoot/>
  </div>
</template>

<script>
import cmpHead from '@/components/cmpHead'
import cmpFoot from '@/components/cmpFoot'

export default {
  components: { cmpHead, cmpFoot }
}
</script>
<style scoped>
</style>
