const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10


const userSchema = new Schema({
        UserId: ObjectId,
        userName: { unique: true, type: String },
        password: String,
        createAt: { type: Date, default: B = new Date() },
        lastLoginAt: { type: Date, default: B = new Date() }
    }, {
        collection: 'user'
    })
    //每次存储数据时都要执行
userSchema.pre('save', function(next) {
    //let user = this
    // console.log(this)
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })

    })
})
userSchema.methods = {
    //密码对比
    comparePassword: (_password, password) => {
        return new Promise((reslove, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) {
                    reslove(isMatch)
                } else {
                    reject(err)
                }
            })
        })
    }
}
mongoose.model('User', userSchema);