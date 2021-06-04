<template>
  <div class="container px-2">
    <div class="official"></div>

    <!-- 轮播广告牌 -->
    <div>
      <mt-swipe :auto="4000" style="height:200px">
        <mt-swipe-item v-for="(item,i) in imgList" :key="i">
          <img :src="`${baseURL}/${item.img}`" width="100%" height="100%" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 图标展示 -->
    <div class="icon" style="text-align:center;">
      <div class="icon-ul d-flex">
        <div class="i">
          <img
            src="../assets/img/card.jpg"
            to="/messagelist"
            style="width:80px; height:80px;padding:10px;"
          />
          <router-link to="/messagelist" style="color:black;">商品详情</router-link>
        </div>

        <div class="i">
          <img src="../assets/img/cart.jpg" style="width:80px; height:80px;padding:10px;" />
          <router-link to="/product" style="color:black;">购物商城</router-link>
        </div>

        <div class="i">
          <img src="../assets/img/cp.jpg" style="width:80px; height:80px;padding:10px;" />
          <router-link to="/messagelist" style="color:black;">商品保障</router-link>
        </div>

        <div class="i">
          <img src="../assets/img/kefu.jpg" style="width:80px; height:80px;padding:10px;" />
          <router-link to="/login" style="color:black;">联系客服</router-link>
        </div>
      </div>
    </div>

    <!-- 新品上市 -->
    <div class="line"></div>
    <h5
      class="new"
      style="width:355px;height:40px;background-color:rgba(241, 241, 237, 0.699);px-5"
    >新品上市</h5>

    <div class="main row p-3 d-flex flex-warp justify-content-between">
      <div
        class="main-box"
        border
        m-1
        p-1
        v-for="(item,index) in shopListData"
        :key="index"
        style="width:46%;border-radius:5px"
      >
        <div style="border:thin solid black; margin-bottom:5px;border-radius:5px;width:160px;">
          <img class="image" :src="`${baseURL}/${item.pic}`" style="width:150px;height:160px;" />
          <h2 class="mt-4">{{item.title}}</h2>
          <p class="price">￥ {{toFixed(item.price)}}</p>
          <div>
            <button @click="addCart(item.lid)" class="mb-4 btn btn-danger">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex flex-warp justify-content-between"></div>
      <mt-button @click="jumpCart">查看购物车</mt-button>
      <mt-button @click="loadMore">加载更多</mt-button>
    </div>

    <!-- 精品推荐 -->
    <div class="line"></div>
    <h5
      class="new"
      style="width:355px;height:40px;background-color:rgba(241, 241, 237, 0.699);px-5"
    >精品推荐</h5>

    <div class="main row p-3 d-flex flex-warp justify-content-between">
      <div
        class="main-box"
        border
        m-1
        p-1
        v-for="(item,index) in shopListData"
        :key="index"
        style="width:46%;border-radius:5px"
      >
        <div style="border:thin solid black; margin-bottom:5px;border-radius:5px;width:160px;">
          <img class="image" :src="`${baseURL}/${item.pic}`" style="width:150px;height:160px;" />
          <h2 class="mt-4">{{item.title}}</h2>
          <p class="price">￥ {{toFixed(item.price)}}</p>
          <div>
            <button @click="addCart(item.lid)" class="mb-4 btn btn-danger">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="d-flex flex-warp justify-content-between"></div>
      <mt-button @click="jumpCart">查看购物车</mt-button>
      <mt-button @click="loadMore">加载更多</mt-button>
    </div>

    <!-- 销售Top -->
    <div class="line"></div>
    <h5
      class="new"
      style="width:355px;height:40px;background-color:rgba(241, 241, 237, 0.699);px-5"
    >销售Top</h5>

    <div class="main row p-3 d-flex flex-warp justify-content-between">
      <div
        class="main-box"
        border
        m-1
        p-1
        v-for="(item,index) in shopListData"
        :key="index"
        style="width:46%;border-radius:5px"
      >
        <div style="border:thin solid black; margin-bottom:5px;border-radius:5px;width:160px;">
          <img class="image" :src="`${baseURL}/${item.pic}`" style="width:150px;height:160px;" />
          <h2 class="mt-4">{{item.title}}</h2>
          <p class="price">￥ {{toFixed(item.price)}}</p>
          <div>
            <button @click="addCart(item.lid)" class="mb-4 btn btn-danger">加入购物车</button>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-warp justify-content-between"></div>
    <mt-button @click="jumpCart">查看购物车</mt-button>
    <mt-button @click="loadMore">加载更多</mt-button>
  </div>
</template>

<script>
import {getCarouselList,getNewArrialList} from "@/assets/js/apis/index.js" //导入接口
import {getProductList,baseURL} from "@/assets/js/apis/product.js" //导入接口
import {addCart} from "@/assets/js/apis/cart.js" //导入接口添加购物车接口
// import list from "@/assets/json/data.json";
export default {
  name: "index",
  data() {
    return {
        list:[],//保存服务器返回的商品列表数据
        imgList:[],
        baseURL:baseURL,
        pno:0,//当前页码
        pageSize:9,//每页个数
        // recommendedList:[],
        shopListData: []
    };
  },
   mounted(){  //在加载完了后调用
    this.loadMore();
  },
   
  created(){
    this.loadCarouselList();
    // this.loadRecommendedList();
    this.loadNewArrialList();
  },
  methods: {
     jumpCart(){
      this.$router.push("/cart");
    },
    //  loadMore(){
      
    // },
    

   async loadCarouselList(){
      let result= await getCarouselList();
      //console.log(result);
      this.imgList = result;
    },
  
    async loadNewArrialList(){
      let result= await getNewArrialList();      
      this.shopListData= result;
      console.log(this.shopListData);
    },
     async loadMore(){
      this.pno++;//每次调用页码数加1
      let pno=this.pno;
      let pageSize=this.pageSize;
      let params = {pno,pageSize}
      let result = await getProductList(params)  //异步调用
      console.log(result);//测试用
      if(result.code==300) //需要用户登录（用户没有登录过，用户的seesion已过期）
      {
        this.$router.push("/login");
        return;
      }
      this.list = this.list.concat(result.data) ;//返回商品列表数据追加到数组
    },
    async addCart(lid){
      //创建参数对象（如果有参数需要传递的话）
      let buyCount = 1; //默认每次添加的数量是1
      let params={lid,buyCount};

      console.log(params)

      //异步调用
      let result = await addCart(params);
      console.log(result);//测试输出
      //处理返回后的数据
      if(result.code==300) //需要用户登录（用户没有登录过，用户的seesion已过期）
      {
        this.$router.push("/login")
        return;
      }

      if(result.code==200){
        this.$toast("添加成功！"); //结果200返回添加成功
      }else{
        this.$messagebox("添加失败",result.msg); //否则添加失败
      }      
    },

    toFixed(value) {
      return JSON.parse(value).toFixed(2)  //获取小数点后两位
    },
 
  },  
components:{
  },
};

</script>
<style scoped>
.official {
  width: 100%;
  height: 30px;
  background: white;
  margin-top: 2px;
  background: url("../assets/img/official.png") no-repeat;
  background-size: 100% 100%;
}
.icon-ul {
  text-align: center;
  margin: 0 auto;
  width: 350px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.i {
  padding: 0;
}
.new {
  font-size: 30px;
  font-style: italic; 
}
.line {
  margin: 25px auto;
  text-align: center;
  height: 2px;
  width: 200px;
  background-color: black;
}
</style>