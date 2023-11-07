import router from '@/portal/router_entry'
import { checkAuth } from './auth'

export type RouterProps = {
  state?: object
  replace?: boolean
  query?: object
}

function parseQueryString(data: any) {
  const arr: any = []
  if (!data) {
    return ''
  }

  Object.keys(data).forEach((key: string) => {
    arr.push(`${key}=${data[key]}`)
  })

  return '?' + arr.join('&')
}

export const push = (pathname: string, opts: RouterProps) => {
  // 权限校验
  if (!checkAuth(pathname)) {
    return
  }
  if (!opts) {
    router.push(pathname)
  } else {
    const routerOpts: any = {
      path: pathname,
      replace: opts.replace || false,
    }
    if (opts.query) {
      routerOpts.query = opts.query
    }
    if (opts.state) {
      routerOpts.params = opts.state
    }

    router.push(routerOpts)
  }
}

export const pop = (index?: number) => {
  router.go(index || -1)
}

export default {
  push,
  pop,
}
