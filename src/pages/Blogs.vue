<template>
  <Layout>
    <div class="blog-wrap">
      <BlogItem v-for="edge in $page.allStrapiPost.edges" :key="edge.node.id" :item="edge.node"></BlogItem>
    </div>
  </Layout>
</template>
<script>
import BlogItem from './compoments/BlodItem'
export default {
  name: 'BlogList',
  components: {
    BlogItem,
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-wrap{
  background-color:rgba(255,255,255,0.5);
  padding: 10px;
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
