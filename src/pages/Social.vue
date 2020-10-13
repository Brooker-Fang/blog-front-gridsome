<template>
  <Layout>
    <div class="warp">
      <el-tabs type="card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 学习</span>
        <div class="content"></div>
      </el-tab-pane>
      <el-tab-pane label="生活">生活</el-tab-pane>
      <el-tab-pane label="段子">段子</el-tab-pane>
      <el-tab-pane label="兴趣">兴趣</el-tab-pane>
    </el-tabs>
    </div>
  </Layout>
</template>
<script>
export default {
  name: 'Social',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.warp{
  padding: 20px;
}
</style>
