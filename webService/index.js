const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.body = "<h1>欢迎来到koa2的世界</h1>"
})

app.listen(3000, () => {
    console.log("项目启动成功")
})