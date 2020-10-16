<template>
  <Layout>
    <div class="wrap">
      <ProjectItem v-bind="$attrs" v-for="edge in $page.allStrapiProject.edges" :key="edge.node.id" :item="edge.node"></ProjectItem>
    </div>
  </Layout>
</template>

<script>
import ProjectItem from './compoments/ProjectItem'
export default {
  components: {
    ProjectItem
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  padding: 10px;
}
</style>
<page-query>
query{
  allStrapiProject{
    edges{
      node{
        id
        url
        name
        updated_at
        created_at
        protocol
        intro
        start
        fork
        view
        tags{
          id
          title
        }
      }
    }
  }
}
</page-query>