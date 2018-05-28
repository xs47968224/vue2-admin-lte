import Vue from 'vue'
import store from './store/index.js'
import VueI18n from 'vue-i18n'
import { Pagination, Dialog, Autocomplete, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem, MenuItemGroup, Input, InputNumber, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup, Switch, Select, Option, OptionGroup, Button, ButtonGroup, Table, TableColumn, DatePicker, TimeSelect, TimePicker, Popover, Tooltip, Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs, TabPane, Tag, Tree, Alert, Slider, Icon, Row, Col, Upload, Progress, Badge, Card, Rate, Steps, Step, Carousel, CarouselItem, Collapse, CollapseItem, Cascader, ColorPicker, Loading, MessageBox, Message, Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

// 引用API文件
import api from './api/index.js'
import utils from './utils/index.js'
import VModal from 'vue-js-modal'

// 设置常量信息
let SITE_NAME = '后台管理系统'

// 设置全局公用常量
Vue.prototype.SITE_NAME = SITE_NAME

// 将API方法绑定到全局
Vue.prototype.$api = api
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

// i18n
Vue.use(VueI18n)
Vue.config.lang = 'zh-cn'

// ElementUI
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Loading.directive)

// VModal 模态框
Vue.use(VModal, { dynamic: true })

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.prototype.$store = store

// 路由事件之前
router.beforeEach((to, from, next) => {
  Loading.service({
    background: 'rgba(0, 0, 0, 0.7)',
    customClass: 'animated fadeIn'
  })
  if (to.path === '/auth/logout') {
    store.commit('SET_USER', {
      token: false,
      name: ''
    })
    store.commit('AUTH_LAYOUT')
    next({
      path: '/auth/login'
    })
  }

  if (to.meta.requireAuth) {
    if (store.state.user.token) {
      next()
    } else {
      next({
        path: '/auth/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
// 路由事件之后
router.afterEach((to, from) => {
  Loading.service({
    customClass: 'animated fadeOut'
  }).close()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
