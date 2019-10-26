<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="search-icon">
        </van-col>
        <van-col span="16">
          <input class="search-input" type="text">
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swipe-bar">
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(bannerPic,index) in swipeItemPic" :key="index">
          <img v-lazy="bannerPic.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--type bar-->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!--add bar-->
    <div>
      <img v-lazy="advertesPicture" width="100%">
    </div>
    <!--swiper-->
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods " :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilters}}(￥{{item.mallPrice | moneyFilters}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--floor one area-->
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"/>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"/>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"/>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item , index) in hotGoods" :key="index">
              <goods-info
                :goodsId="item.goodsId"
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import floorComponent from "../components/floorComponent";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toMoney } from "@/filter/monyFilter.js";
import goodsInfo from "../components/goodsInfoComponent";
let listJson = require("../js/index.json");
export default {
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  data() {
    return {
      mag: "ShoppingMaill MAill",
      locationIcon: require("../assets/images/location.png"),
      swipeItemPic: [],
      category: [],
      advertesPicture: "",
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3
      },
      floorName: {},
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [] //热卖商品
    };
  },
  filters: {
    moneyFilters(money) {
      return toMoney(money);
    }
  },
  created() {
    //   new Promise(function(resolve,reject){
    //       if(listJson.status==200){
    //       }
    //   })
    // axios({
    //   method: "get",
    //   url: "https://www.easy-mock.com/mock/5db40ac4a551da065cc3c797/index/index"
    // })
    //   .then(function(res) {
    //     if(res.status==200){
    //         this.category = res.data.data
    //     }
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  },
  methods: {
    getListData() {
      console.log(listJson.data);
      if (listJson.data) {
        this.category = listJson.data.category;
        this.swipeItemPic = listJson.data.slides;
        this.advertesPicture = listJson.data.advertesPicture.PICTURE_ADDRESS;
        this.recommendGoods = listJson.data.recommend; //推荐商品
        this.floor1 = listJson.data.floor1; //楼层1数据
        this.floor2 = listJson.data.floor2; //楼层2数据
        this.floor3 = listJson.data.floor3; //楼层3数据
        this.floorName = listJson.data.floorName;
        this.hotGoods = listJson.data.hotGoods;
      }
    }
  },
  async mounted() {
    await this.getListData();
    console.info(this.swipeItemPic, "nn");
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.search-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swipe-bar {
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.type-bar img {
  min-width: 3.2rem;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}
</style>