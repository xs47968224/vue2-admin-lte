<template>
  <!-- Main Header -->
  <header class="main-header">

      <!-- Logo -->
      <a href="" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini">群控</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg" v-text="siteTitle">群控管理系统</span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>

          <!-- Navbar Right Menu -->
          <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">

                  <!-- User Account Menu -->
                  <li class="dropdown user user-menu">
                      <!-- Menu Toggle Button -->
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <!-- The user image in the navbar-->
                          <img src="static/images/user2-160x160.jpg" class="user-image" alt="User Image">
                          <!-- hidden-xs hides the username on small devices so only the image appears. -->
                          <span class="hidden-xs" v-text="username"></span>
                      </a>
                      <ul class="dropdown-menu">
                          <!-- The user image in the menu -->
                          <li class="user-header">
                              <img src="static/images/user2-160x160.jpg" class="img-circle" alt="User Image">

                              <p>
                                  <span v-text="username"></span>
                                  <small>注册时间 2018-04-11 12:00:00</small>
                              </p>
                          </li>
                          <li class="user-footer">
                              <div class="pull-left">
                                  <a href="#" class="btn btn-default btn-flat"> 修改密码</a>
                              </div>
                              <div class="pull-right">
                                  <a href="#/auth/logout" class="btn btn-default btn-flat"> 退出</a>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      siteTitle: this.SITE_NAME
    }
  },
  mounted () {
    this.username = this.$store.state.user.name
  }
}
</script>
