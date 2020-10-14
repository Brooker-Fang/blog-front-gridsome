<template>
  <Layout>
    <div class="wrap">
      <g-link to="/blogs" class="back"
        ><el-button type="text"
          ><i class="el-icon-arrow-left"></i>返回</el-button
        ></g-link
      >
      <div class="title">{{blog.title}}</div>
      <div v-html="HtmlToMd(blog.content)" class=""></div>
    </div>
  </Layout>
</template>
<script>
import MarkdownIt from 'markdown-it'
const markdownIt = new MarkdownIt()
export default {
  name: 'BlogDetai',
  computed: {
    blog() {
      return this.$page.strapiPost
    }
  },
  methods: {
    HtmlToMd (md) {
      return markdownIt.render(md)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  position: relative;
  padding: 0 20px;
  line-height: 70px;
  text-align: center;
  .back{
    position: absolute;
    line-height: 70px;
    left: 10px;
  }
  .title{
    font-size: 40px;
    color: #f56c6c;
  }
}
</style>
<page-query>
query ($id: ID!){
  strapiPost(id: $id){
    id
    title
    created_at
    content
    cover{
      url
    }
    tags{
      id
      title
    }
    view
    intro
  }
}
</page-query>