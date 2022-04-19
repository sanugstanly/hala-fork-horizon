export default (to, from, next) => {

    if (to.matched.some((m) => m.meta.backToFresh)) {
        window.location.href = window.location.origin
        return;
    }

    return next()
}
