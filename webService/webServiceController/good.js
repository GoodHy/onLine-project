const mongoose = require('mongoose')
const Router = require('koa-router')
const fs = require('fs')

let router  = new Router()

router.get('/addGoodsInfo',async(ctx)=> {
   fs.readFile('./new_dataJson/new_goods.json','utf8',(err,data)=>{
       if(err){
           console.log('添加数据失败')
       }
       data = JSON.parse(data)
       let goodsCount = 0
       const Goods = mongoose.model('Goods')
       data.map((item,index)=>{
           let newGoodsItem = new Goods(item)
           newGoodsItem.save().then(()=>{
               goodsCount++
               console.log('成功'+goodsCount)
           }).catch(err=>{
               console.log('失败',err)
           })
       })
   })
   ctx.body="开始导入数据"
})
router.get('/addAllCategroy',async (ctx) =>{
    fs.readFile('./new_dataJson/category.json','utf8',(err,data)=>{
      if(err){
          ctx.body="导入错误"
      }
      data = JSON.parse(data)
      const Categroy = mongoose.model('Categroy')
      let categroyCount=0
      data.RECORDS.map((item,index)=>{
          let categroyItem = new Categroy(item)
          categroyItem.save().then(()=>{
            categroyCount++
            console.log('成功',categroyCount)
          }).catch((err)=>{
              console.log('失败',err)
          })
      })

  })
  ctx.body="开始导入数据"

})
router.get('/addcategroysub',async(ctx)=>{
    fs.readFile('./new_dataJson/category_sub.json','utf8',(err,data)=>{
        if(err){
            ctx.body="解析数据错误"
        }
        data = JSON.parse(data)
        ctx.body=data
        const CategroySub = mongoose.model('CategroySub')
        data.RECORDS.map((item,index)=>{
            console.log(item,"=====")
            let categroy_sub_item = new CategroySub(item)
            categroy_sub_item.save().then(()=>{
                ctx.body="保存数据成功"
            }).catch(err=>{
                ctx.body="解析数据错误"
            })
        })
    })
    ctx.body = "数据加载中"
})
//前端请求数据
router.post('/goodDetailInfo',async(ctx)=>{
    let goodId = ctx.request.body.goodsId
    let Goods = mongoose.model('Goods')
   await Goods.findOne({ID:goodId}).then(async(result)=>{
       ctx.body={
           code:200,
           message:result
       }
   }).catch(err=>{
       ctx.body={
           code:500,
           message:"服务器错误"
       }
   })
})

// router.post('/goodDetailInfo',async(ctx)=>{
//     try{
//         let goodId = ctx.request.body.goodsId
//         let Goods = mongoose.model('Goods')
//        let result =  await Goods.findOne({ID:goodId}) 
//        ctx.body={
//         code:200,
//         message:result
//        }
//     }catch(err=>{
//         ctx.body={
//             code:500,
//             message:err
//         }
//     })
// })
//获取大类商品的
router.get('/getCategoryList',async(ctx)=>{
    let Categroy = mongoose.model('Categroy')
   await Categroy.find().then(async(result)=>{
       ctx.body={
           code:200,
           message:result
       }
   }).catch(err=>{
       ctx.body={
           code:500,
           message:"服务器错误"
       }
   })
})
//读取小类的商品id
router.post('/getCategorySubList',async(ctx)=>{
    let CategroySub = mongoose.model('CategroySub')
    let categoryId = ctx.request.body.categoryId
   await CategroySub.find({MALL_CATEGORY_ID:categoryId}).then(async(result)=>{
       ctx.body={
           code:200,
           message:result
       }
   }).catch(err=>{
       ctx.body={
           code:500,
           message:"服务器错误"
       }
   })
})
//根据商品类别获取商品列表
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
    let categorySubId = ctx.request.body.categorySubId
    let page = ctx.request.body.page
    let num=5
    let start = (page-1)*num
    const Goods = mongoose.model('Goods')
   await Goods.find({SUB_ID:categorySubId}).limit(start).skip(page).then(async(result)=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(err=>{
        ctx.body={
            code:500,
            message:err
        }
    })
})

router.get('/index',async(ctx)=>{
let Sliders = mongoose.model('Slider')
let FloorOnes = mongoose.model('FloorOne')
let FloorTwos = mongoose.model('FloorTwo')
let FloorThrees = mongoose.model('FloorThree')
let CategroyMains = mongoose.model('CategroyMain')
let HotGoods = mongoose.model('HotGood')
let Cecommends = mongoose.model('Recommend')
   let _data = {

   }
   //轮播
   await Sliders.find().then(async(result)=>{
    _data.slides=result
        }).catch(err=>{
            ctx.body={
                code:500,
                message:"服务器错误"
            }
   })
   //一楼
   await FloorOnes.find().then(async(result)=>{
    _data.floor1=result
        }).catch(err=>{
            ctx.body={
                code:500,
                message:"floor1服务器错误"
            }
   })
    //二楼
    await FloorTwos.find().then(async(result)=>{
        _data.floor2=result
            }).catch(err=>{
                ctx.body={
                    code:500,
                    message:"二楼服务器错误"
                }
       })
     //三楼
     await FloorTwos.find().then(async(result)=>{
        _data.floor3=result
            }).catch(err=>{
                ctx.body={
                    code:500,
                    message:"三楼服务器错误"
                }
       })
    //category
    await CategroyMains.find().then(async(result)=>{
        _data.category=result
            }).catch(err=>{
                ctx.body={
                    code:500,
                    message:"三楼服务器错误"
                }
       })
    //hotgood
    await HotGoods.find().then(async(result)=>{
        _data.hotGoods=result
            }).catch(err=>{
                ctx.body={
                    code:500,
                    message:"三楼服务器错误"
                }
       })
    //cecommend
    await Cecommends.find().then(async(result)=>{
        _data.recommend=result
            }).catch(err=>{
                ctx.body={
                    code:500,
                    message:"三楼服务器错误"
                }
       })
    if(_data.slides&&_data.recommend&&_data.hotGoods&&_data.category&&_data.floor1&&_data.floor2&&_data.floor3){
        ctx.body={
            code:200,
            message:"success",
            data:_data
        }
    }else{
        ctx.body={
            code:500,
            message:"数据不全错误"
        }
    }
})
module.exports = router;