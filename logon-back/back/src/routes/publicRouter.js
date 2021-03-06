const Router = require('koa-router')
const publicController = require('../api/PublicController')

const router = new Router()

router.prefix('/public')
router.get('/getCaptcha', publicController.getCaptcha)

module.exports = router
