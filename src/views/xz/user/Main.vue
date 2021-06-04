<template>
  <div class="container px-0" style="background-color:#eee">
    <!-- 头部(头像区) -->
    <div class="container-header pb-4" style="background-color:#fff">
      <div class="left pt-4 pb-1">
        <img
          src="../../../assets/img/avator.jpeg"
          class
          style="weight:70px;height:70px;border-radius:50%"
        />
      </div>
      <div class="right" style="font-size:13px">
        <h5 class="mb-1">{{uname}}</h5>
        <span>付出不在于多少，只要值得就好。</span>
      </div>
    </div>

    <!-- 优惠券/关注/积分 -->
    <div class="d-flex mt-2 px-4 py-1 justify-content-around" style="background-color:#fff">
      <div>
        <p class="m-0">0</p>
        <p class="m-0">优惠券</p>
      </div>
      <div>
        <p class="m-0">0</p>
        <p class="m-0">关注</p>
      </div>
      <div>
        <p class="m-0">0</p>
        <p class="m-0">积分</p>
      </div>
    </div>

    <!-- 中间(我的订单) -->
    <div class="container-middle mt-2" style="background-color:#fff">
      <div class="up px-4" style="height:50px;line-height:50px;">
        <p style="float:left;margin:0px;">我的订单</p>
        <p style="float:right;margin:0px;" @click="allOrder">全部订单>></p>
      </div>

      <router-link to="/allorder" class="down pt-1 w-100 d-flex justify-content-around" style="height:80px;color:#000;">
        <p v-for="(item,i) of middle" :key="i" class="m-0" style="width:60px;">
          <img :src="item.img" style="width:35px;height:35px;" />
          <br />
          <span style="font-size:14px;">{{item.name}}</span>
        </p>
      </router-link>
    </div>

    <!-- 底部 -->
    <div class="container-bottom mt-2">
      <router-link to="/cart" class="bottom">
          <img src="../../../assets/img/5.jpg" />
          <span>购物车</span>
          <p> >> </p>
      </router-link>
      <router-link to="/collection" class="bottom">
        <img src="../../../assets/img/6.jpg" />
        <span>收藏夹</span>
         <p> >> </p>
      </router-link>
      <router-link to="/address" class="bottom">
        <img src="../../../assets/img/7.jpg" />
        <span>收货地址</span>
         <p> >> </p>
      </router-link>
      <router-link to="/about" class="bottom">
        <img src="../../../assets/img/8.jpg" />
        <span>关于我们</span>
         <p> >> </p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
   data(){
      return{
         uname:"",
         middle:[
            {
             img:require("@/assets/img/1.jpg"),
             name:"待付款"
            },
            {
             img:require("@/assets/img/2.jpg"),
             name:"待收货"
            },
            {
             img:require("@/assets/img/3.jpg"),
             name:"待评价"
            },
            {
             img:require("@/assets/img/4.jpg"),
             name:"退货(款)"
            },
         ],
      }
   },
   mounted(){
      this.uname = localStorage.getItem("uname");
   },
   methods:{
      allOrder(){
          this.$router.push("/allorder");
      }
   }
 
}
</script>

<style>
.container-bottom .bottom {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  background-color: #fff;
}
.container-bottom img {
  width: 35px;
  height: 35px;
  margin-top: 7px;
  margin-right: 15px;
}
.container-bottom span {
  color: black;
}
.container-bottom p{
   color: black;
   font-size: 18px;
   margin-left: 40px;
}
.container-bottom .right {
  margin-left: 50px;
}
</style>