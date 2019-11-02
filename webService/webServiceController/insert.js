const mongoose = require('mongoose')
const Router = require('koa-router')
const fs = require('fs')
//导航图
let router  = new Router()
router.get('/slider',async (ctx) =>{
    fs.readFile('./data_json/slides.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入轮播错误"
      }
      let goodsCount = 0
      data = JSON.parse(data)
      let Sliders = mongoose.model('Slider')
      data.map((item,index)=>{
          console.info(item)
          let _Slider = new Sliders(item)
          _Slider.save().then(async()=>{
            goodsCount++
            console.log(goodsCount,'成功',item)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })

  })
  ctx.body="开始导入轮播数据"
})
//导入楼层数据
router.get('/floor',async (ctx) =>{
    fs.readFile('./data_json/floorList.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入轮播错误"
      }
      data = JSON.parse(data)
      let FloorOnes = mongoose.model('FloorOne')
      let FloorTwos = mongoose.model('FloorTwo')
      let FloorThrees = mongoose.model('FloorThree')
      data.floor1.map((item,index)=>{
          console.info(item)
          let _floorOne = new FloorOnes(item)
          _floorOne.save().then(async()=>{
            console.log('成功_floorOne',item)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })
      data.floor2.map((item,index)=>{
        console.info(item)
        let _floorTwo = new FloorTwos(item)
        _floorTwo.save().then(async()=>{
          console.log('成功_floorTwo',item)
        }).catch((err)=>{
            console.log('失败',err)
        })
    })
    data.floor3.map((item,index)=>{
        console.info(item)
        let _floorthree = new FloorThrees(item)
        _floorthree.save().then(async()=>{
          console.log('_floorthree',item)
        }).catch((err)=>{
            console.log('失败',err)
        })
    })
  })
  ctx.body="开始导入轮播数据"
})

router.get('/productMain',async (ctx) =>{
    fs.readFile('./data_json/categoryList.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入轮播错误"
      }
      data = JSON.parse(data)
      let CategroyMains = mongoose.model('CategroyMain')
      data.map((item,index)=>{
          console.info(item)
          let _categroyMains = new CategroyMains(item)
          _categroyMains.save().then(async()=>{
            console.log('_categroyMains成功',item)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })

  })
  ctx.body="开始导入轮播数据"
})

router.get('/hotgood',async (ctx) =>{
    fs.readFile('./data_json/hotGoods.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入轮播错误"
      }
      data = JSON.parse(data)
      let HotGoods = mongoose.model('HotGood')
      data.map((item,index)=>{
          console.info(item)
          let _hotGoods = new HotGoods(item)
          _hotGoods.save().then(async()=>{
            console.log('_hotGoods成功',item)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })

  })
  ctx.body="开始导入热卖商品数据"
})

router.get('/cecommend',async (ctx) =>{
    fs.readFile('./data_json/recommend.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入热卖商品数据错误"
      }
      data = JSON.parse(data)
      let Cecommends = mongoose.model('Recommend')
      data.map((item,index)=>{
          console.info(item)
          let _cecommends = new Cecommends(item)
          _cecommends.save().then(async()=>{
            console.log('_cecommends成功',item)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })

  })
  ctx.body="开始导入热卖商品数据"
})
module.exports = router;