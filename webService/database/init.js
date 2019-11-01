const mongoose = require('mongoose')
const db = "mongodb://62.234.86.222/web-db"
const glob = require('glob');
const { resolve } = require('path')

mongoose.Promise = global.Promise
exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}
exports.connect = () => {
    //连接数据库
    mongoose.connect(db)
    let maxConnect = 0;
    return new Promise((reslove, reject) => {
        //增加数据库连接的事件监听
        mongoose.connection.on('disconnected', (err) => {
            console.log('***********数据库断开***********')
                //进行重连
            if (maxConnect < 3) {
                maxConnect++;
                mongoose.connect(db)
            } else {
                reject(err);
                throw new Error("连接数据库出问题，请人为检查")
            }

        })

        //数据库出现错误的时候
        mongoose.connection.on('error', err => {
            console.log('***********数据库错误***********')
                //进行重连
            if (maxConnect < 3) {
                maxConnect++;
                mongoose.connect(db)
            } else {
                reject(err);
                throw new Error("连接数据库出问题，请人为检查")
            }
        })

        //链接打开的时候
        mongoose.connection.once('open', () => {
            console.log('MongoDB Connected successfully!');
            reslove();
        })
    })
}