<template>
 <el-card class="box-card wrap">
  <div slot="header" class="flex flex-align-center flex-space-between header">
    <span class="title"><i class="el-icon-reading"></i>{{name}}</span>
    <el-button @click="goGitHub(url)" type="text"><i class="el-icon-back"></i>前往Github</el-button>
  </div>
  
  <div class="content">
    
    {{intro}}
    <div class="update-info">
      最近更新 {{ created_at | date }}
    </div>
  </div>
  <div class="flex flex-align-center flex-space-between footer">
    <span class="left">
      <el-tooltip class="item" effect="dark" :content="'start:' + start" placement="bottom-start">
        <span class="icon-item"  style="color: deeppink;margin-left: 0px" >
          <i class="el-icon-star-off" ></i>{{start}}
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" :content="'view:' + view" placement="bottom-start">
        <span class="icon-item" style="color: lightseagreen">
          <i class="el-icon-view" ></i>{{view}}
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" :content="'fork:' + fork" placement="bottom-start">
        <span class="icon-item" style="color: rgb(247, 186, 42)">
          <i class="el-icon-coordinate"></i>{{fork}}
        </span>
      </el-tooltip>
    </span>
    <span class="right">
      <span v-if="protocol" class="tag protocol-tag">{{protocol}}</span>
      <span class="tag" v-for="tag in item.tags" :key="tag.id">{{
        tag.title + tag.id
      }}</span>
    </span>
  </div>
</el-card>
</template>
<script>
export default {
  name: 'ProjectItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ...this.item
    }
  },
  methods: {
    goGitHub(url) {
      window.open(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  margin-bottom: 10px;
  &::v-deep .el-card__body{
    padding: 0;
  }
  .header{
    .title{
      font-size: 26px;
      color: #f56c6c;
      i{
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
  .content{
    padding: 20px;
    color:#999999;
  }
  .footer{
    padding: 0 20px;
    .left{
      .icon-item{
        margin: 0 5px;
        i{
          margin-right: 5px;
        }
      }
    }
    .right{
      .tag {
        padding: 5px;
        border-radius: 5px;
        background-color: hsla(0,87%,69%,.1);
        border-color: hsla(0,87%,69%,.2);
        color: #f56c6c;
        font-size: 12px;
        margin-right: 5px;
      }
      .protocol-tag {
        background-color: rgba(103,194,58,.2);
        border-color:rgba(103,194,58,.2);
        color:#67c23a;
      }
    }
  }
}   
</style>
