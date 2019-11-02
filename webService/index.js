const Koa = require('koa');
const app = new Koa();
//引入connect
const { connect, initSchemas } = require('./database/init.js')
const mongoose = require('mongoose')
const Router = require('koa-router')
    //支持跨域
const cors = require('koa2-cors')
    //解析post请求
const bodyParser = require('koa-bodyparser')
    //注册中间件
app.use(cors())
app.use(bodyParser())

//引入用户模块
let user = require('./webServiceController/user.js')
let goods = require('./webServiceController/good.js')
let insert = require('./webServiceController/insert.js')



let router = new Router()
    //装载子路由
router.use('/user', user.routes())
//装载子路由一定要对应相应的子路由(===>>goods.routes())
router.use('/goods', goods.routes())
router.use('/insert', insert.routes())
    //加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;
(async() => {
    //连接数据库
    await connect()
        //初始化表
    initSchemas();
})()
app.listen(3001, () => {
    console.log("项目启动成功")
})