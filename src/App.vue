<template>
  <div id="app" v-bind:class="[ !$store.state.fulllayout ? '' : 'auth', 'inner-wrapper' ]" v-loading>
    <Header v-if="!$store.state.fulllayout"></Header>
    <Sidebar v-show="!$store.state.fulllayout"></Sidebar>
    <div class="content-wrapper">
      <div class="content">
        <router-view ></router-view>
      </div>
    </div>
    <Footer v-if="!$store.state.fulllayout"></Footer>
  </div>
</template>
<script>

import Header from './components/header/header.vue'
import Sidebar from './components/sidebar/sidebar.vue'
import Footer from './components/footer/footer.vue'
export default {
  components: { Header, Sidebar, Footer },
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/custom";
</style>
