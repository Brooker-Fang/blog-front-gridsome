<template>
  <Layout>
    <div class="blog-wrap">
      <BlogItem :item="$page.allStrapiPost.edges[0].node"></BlogItem>
    </div>
  </Layout>
</template>

<script>
import BlogItem from './compoments/BlodItem'
export default {
  components: {
    BlogItem
  },
  metaInfo: {
    // 会去拼接配置文件 的siteName
    title: ''
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
<page-query>
query{
  allStrapiPost{
    edges{
      node{
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
  }
}
</page-query>
