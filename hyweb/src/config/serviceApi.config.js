const BASEURL = "http://localhost:3001/"; //基础服务地址
const MOCKDATA = "https://www.easy-mock.com/mock/5db40ac4a551da065cc3c797/index/"
const URL = {
    getShopingMallInfo: MOCKDATA + 'index',
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: BASEURL + 'user/register',
    login: BASEURL + 'user/login',
    getDetailGoodsInfo:BASEURL + 'goods/goodDetailInfo',
    getCateGoryList:BASEURL + 'goods/getCategoryList',
    getCateGorySubList:BASEURL + 'goods/getCategorySubList',
    getGoodsListByCategorySubID:BASEURL + 'goods/getGoodsListByCategorySubID',
}

module.exports = URL;