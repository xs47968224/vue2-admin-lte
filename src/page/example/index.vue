<template>
  <div>
    <div>
        <section class="content-header">
            <h1>列表</h1>
            <small></small>
        </section>
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <form  class="form-inline" id="search-form" method="get" >
                        <div class="form">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-calendar"></i>
                                    </div>
                                    <input type="text" class="form-control" id="created_at_start" placeholder="时间筛选" name="date[start]" value="">
                                    <span class="input-group-addon" style="border-left: 0; border-right: 0;">-</span>
                                    <input type="text" class="form-control" id="created_at_end" placeholder="时间筛选" name="date[end]" value="">
                                </div>
                            </div>
                            <div class="btn-group" style="margin-left: 10px">
                                <button type="button"  class="btn btn-primary submit"><i class="fa fa-filter"></i>&nbsp;&nbsp;筛选</button>
                                <a href="" class="btn btn-warning pull-left">&nbsp;&nbsp;撤销</a>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <th>时间</th>
                                <th>标题</th>
                                <th>操作</th>
                            </tr>
                            <tr v-for="i in list" :key="i.id">
                                <td><time v-text="$utils.diffForHumans(i.create_at)"></time></td>
                                <td><router-link :to="'/example/content/' + i.id">{{ i.title }}</router-link></td>
                                <td><a href="javascript:;" v-on:click="showModal(i.id)">模态框查看</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="box-footer clearfix text-center">
                    <paginate
                        :page-count="pageCount"
                        :click-handler="getData"
                        :page-range="5"
                        :prev-text="'上一页'"
                        :next-text="'下一页'"
                        :container-class="'pagination'">
                    </paginate>
                </div>
                <!-- /.box-body -->
            </div>
        </section>
    </div>
    <modals-container name="example">

    </modals-container>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
import detailModal from './detailModal.vue'
export default {
  data () {
    return {
      list: [],
      page: 1,
      pageCount: 20
    }
  },
  created () {
    this.getData(1)
  },
  methods: {
    getData (pageNum) {
      this.$loading({
        background: 'rgba(0, 0, 0, 0.7)',
        customClass: 'animated fadeIn'
      })
      this.page = pageNum
      this.$api.get('topics?page=' + pageNum, null, r => {
        this.list = r.data
        this.$loading({
          customClass: 'animated fadeOut'
        }).close()
      })
    },
    showModal (id) {
      this.$modal.show(
        detailModal,
        {
          id: id
        },
        {
          width: '70%',
          height: 'auto',
          scrollable: true
        }
      )
    }
  },
  components: {
    'paginate': Paginate
  }
}
</script>
