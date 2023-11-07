import request from '../request'
import _interface from './interface'
import router from '../router'

const app = {
  request,
  interface: _interface,
  router,
}

window.App = app
