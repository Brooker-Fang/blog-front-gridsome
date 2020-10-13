<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ userName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->
    <header>
      <div
        class="header-content flex flex-column flex-center flex-align-center color-fff"
      >
        <h1>{{ userName }}</h1>
        <h3>欢迎来到{{ userName }}的博客</h3>
      </div>
    </header>
    <div class="content-wrap flex flex-space-between color-fff">
      <div class="content">
        <transition name="fade" appear>
          <main>
            <!-- a wrapper for slot is needed -->
            <slot />
            <!-- the content -->
          </main>
        </transition>
      </div>
      <nav class="nav-wrap">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo">
          <g-link class="nav__link" to="/">
            <el-menu-item index="/">
              <i class="el-icon-star-off"></i>
              <span slot="title">最新动态</span>
            </el-menu-item>
          </g-link>
          <g-link class="nav__link" to="/Social">
            <el-menu-item index="/Social">
              <i class="el-icon-user"></i>
              <span slot="title">社交圈</span>
            </el-menu-item>
          </g-link>
          <g-link class="nav__link" to="/Blogs">
            <el-menu-item index="/Blogs">
              <i class="el-icon-document"></i>
              <span slot="title">博客列表</span>
            </el-menu-item>
          </g-link>
          <g-link class="nav__link" to="/Project">
            <el-menu-item index="/Project">
              <i class="el-icon-share"></i>
              <span slot="title">开源项目</span>
            </el-menu-item>
          </g-link>
        </el-menu>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    activeIndex() {
      let path = this.$route.path
      if (path.indexOf("Blogs") !== -1) {
        return "/Blogs"
      }
      return this.$route.path
    },
  },
  data() {
    return {
      userName: '喜剧之王',
    }
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.layout {
  background: #ECEFF1;
  width: 100%;
  min-height: 100vh;
  .header-content {
    height: 300px;
    background: url('../../static/3.jpg');
  }
  .content-wrap {
    width: 70%;
    margin: 20px auto;
    .nav-wrap {
      width: 200px;
      height: 250px;
      padding: 20px;
      border: 1px solid #ffffff;
      border-radius: 5px;
      background: #ffffff;
      margin-left: 50px;
    }
    .content {
      background: #ffffff;
      min-height: 500px;
      border-radius: 5px;
      flex: 1;
      color: #333333;
    }
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
