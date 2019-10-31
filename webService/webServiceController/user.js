const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.get('/', async(ctx) => {
    ctx.body = "这是用户首页"
})

router.post('/register', async(ctx) => {
    console.log(ctx.request.body)
        //取得Model
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body)
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: "注册成功"
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        }
    })
})

router.post('/login', async(ctx) => {
    let loginUser = ctx.request.body
    let userName = loginUser.userName
    let password = loginUser.password
        //引入User的model
    const User = mongoose.model('User')
    await User.findOne({ userName: userName }).then(async(result) => {
        console.log(result, "=========>>")
        if (result) {
            //当用户存在时开始比对密码
            let newUser = new User();
            await newUser.comparePassword(password, result.password)
                .then((isMatch) => {
                    ctx.body = {
                        code: 200,
                        message: isMatch,
                        data: result
                    }
                }).catch(err => {
                    console.log(err)
                    ctx.body = {
                        code: 500,
                        message: err
                    }
                })
        } else {
            ctx.body = {
                code: 200,
                message: "用户不存在"
            }
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code: 500,
            message: err
        }
    })
})
module.exports = router;