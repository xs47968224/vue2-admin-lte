<template>
  <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
      <div class="modal-header">
          <button type="button" class="close" aria-label="Close" @click="$emit('close')"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" v-text="dat.title"></h4>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="$emit('close')">关闭</button>
      </div>
      </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</template>
<script>
export default {
  props: ['id'], // 父级传 谁用谁接受（子级接受）
  data () {
    return {
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
