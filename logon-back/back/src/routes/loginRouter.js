const Router = require('koa-router')
const loginController = require('../api/LoginController')

const router = new Router()

router.prefix('/login')
// 管理业务对应的路径
router.post('/forget', loginController.forget) 
// router.get('/test', loginController.test)
router.post('/login', loginController.login)
router.post('/reg', loginController.reg)

module.exports = router
