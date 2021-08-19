<template>
  <div class="error-image-box">
    <div class=" error-image" />
    <div class="text-center">
      <el-button type="primary" size="default" @click="$router.push('/')">回到首页</el-button>
      <el-button size="default" @click="$router.go(-1)">返回上一页</el-button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.error-image-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.error-image {
  width: 500px;
  height: 500px;
  background: url("http://xianniu-image.oss-cn-beijing.aliyuncs.com/h5_image/public/404.png")
    center no-repeat;
}
</style>
