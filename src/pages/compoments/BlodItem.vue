<template>
  <g-link v-if="item" :to="'/blogs/' + item.id">
    <div class="wrap">
      <div class="title">{{ item.title }}</div>
      <div class="info">
        <i class="el-icon-date info-time-i"></i>{{ item.created_at | date }}
      </div>
      <div class="tag-wrap">
        类型：<span class="tag" v-for="tag in item.tags" :key="tag.id">{{
          tag.title + tag.id
        }}</span>
      </div>
      <div class="three-line-ellipsis intro">
        {{ item.intro }}
      </div>
    </div>
  </g-link>
  <div v-else>
    null
  </div>
</template>
<script>
export default {
  name: 'BlogItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.item)
  },
}
</script>
<style lang="scss" scoped>
.wrap {
  padding: 20px;
  border-radius: 5px;
  background: rgb(255, 255, 255, 0.5);
  .title {
    font-size: 26px;
    font-weight: 600;
    // color: #feb089;
    color: #f56c6c;
  }
  .tag-wrap {
    margin: 5px 0;
    .tag {
      padding: 5px;
      border-radius: 5px;
      background-color: hsla(0,87%,69%,.1);
      border-color: hsla(0,87%,69%,.2);
      color: #f56c6c;
      font-size: 12px;
    }
  }
  .info {
    color: #999999;
    font-size: 12px;
    margin: 5px 0;
    .info-time-i {
      color: lightseagreen;
      margin-right: 10px;
    }
  }
  .intro {
    color: #999999;
  }
  .more {
    text-align: right;
  }
}
</style>
