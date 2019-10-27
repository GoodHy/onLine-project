const BASEURL = "http://localhost:3001/"; //基础服务地址
const URL = {
    getShopingMallInfo: BASEURL + 'index',
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: BASEURL + 'user/register'
}

module.exports = URL;