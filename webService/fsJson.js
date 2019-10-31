const fs = require('fs')

fs.readFile('./data_json/goods.json', 'utf8', function(err, data) {
    let oldData = JSON.parse(data)
    let i = 0;
    let newData = [];
    oldData.RECORDS.forEach((item,index)=>{
        if(item.IMAGE1!=null){
            i++
            console.log(item.NAME)
            newData.push(item)
        }
    })
   console.log(i,"=======")
    fs.writeFile('./new_dataJson/new_goods.json', JSON.stringify(newData), function(err) {
        if (err) console.log('写入操作失败')
        else console.log('写入操作成功')
    })
})