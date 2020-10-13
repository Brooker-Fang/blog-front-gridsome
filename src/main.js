// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "../static/css/global.scss"
import "../static/css/base.scss"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from "dayjs"
export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI)
  Vue.filter('date', (val, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(val).format(format)
  })
  Vue.mixin({
    data () {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
