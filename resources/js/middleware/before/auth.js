import VueCookies from 'vue-cookies'

export default (to, from, next) => {

  if (to.matched.some((m) => m.meta.open_always)) {
    return next()
  }

  if (to.matched.some((m) => m.meta.requiresAuth)) {
    if(VueCookies.get('authenticated') !== '1') {
      return next({ path: '../login' })
    }

    return next()
  }

  if (to.matched.some((m) => m.meta.requiresGuest)) {
    if(VueCookies.get('authenticated') === '1') {
      return next({ path: '/' })
    }

    return next()
  }

  return next()
}
