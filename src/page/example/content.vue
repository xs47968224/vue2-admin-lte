<template>
  <div>
    <section class="content-header">
        <h1>详情</h1>
        <small></small>
    </section>
    <section class="content">
        <div class="box">
            <div class="box-header">
              <h2 v-text="dat.title"></h2>
              <p>作者：{{dat.author.loginname}} 发表于：{{$utils.diffForHumans(dat.create_at)}}</p>
              <hr>
              <article v-html="dat.content"></article>
              <h3>网友回复：</h3>
              <ul>
                <li v-for="i in dat.replies" :key="i.id">
                  <p>评论者：{{i.author.loginname}} 评论于：{{$utils.diffForHumans(i.create_at)}}</p>
                  <article v-html="i.content"></article>
                </li>
              </ul>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      dat: {
        author: {}
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}
</script>
