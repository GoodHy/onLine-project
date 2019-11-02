const BASEURL = "http://service.woniubuhuipao.cn/"; //基础服务地址
const URL = {
    getShopingMallInfo: BASEURL + 'goods/index',
    registerUser: BASEURL + 'user/register',
    login: BASEURL + 'user/login',
    getDetailGoodsInfo:BASEURL + 'goods/goodDetailInfo',
    getCateGoryList:BASEURL + 'goods/getCategoryList',
    getCateGorySubList:BASEURL + 'goods/getCategorySubList',
    getGoodsListByCategorySubID:BASEURL + 'goods/getGoodsListByCategorySubID',
}

module.exports = URL;