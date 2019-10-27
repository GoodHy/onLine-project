const Koa = require('koa');
const app = new Koa();
//引入connect
const { connect, initSchemas } = require('./database/init.js')
const mongoose = require('mongoose')

//立即执行函数
;
(async() => {
    await connect()
        //初始化表
    initSchemas();
    //连接表
    const User = mongoose.model('User');
    let oneUser = new User({ username: 'jiahongyi6', password: '12345' });
    oneUser.save().then(() => {
        console.log('插入成功')
    })
    let users = await User.findOne({});
    console.log('------------')
    console.log(users);
    console.log('------------------')
})()
app.use((ctx) => {
    ctx.body = "<h1>欢迎来到koa2的世界</h1>"
})

app.listen(3001, () => {
    console.log("项目启动成功")
})