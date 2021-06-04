import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "@/views/xz/Product.vue"
import Login from "@/views/xz/user/Login.vue"
import Register from "@/views/xz/user/Register.vue"
import Main from "@/views/xz/user/Main.vue"
import Collection from "@/views/xz/user/Collection.vue"
import Address from "@/views/xz/user/Address.vue"
import AddPlace from "@/views/xz/user/AddPlace.vue"
import About from "@/views/xz/user/About.vue"
import Allorder from "@/views/xz/user/Allorder.vue"
import MessageList from "@/views/xz/MessageList.vue"
import Cart from "@/views/xz/Cart.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首页" }
  },

  {
    path: "/messagelist",  
    component: MessageList,
    meta: { title: "动态" }
  },

  {
    path: "/product",
    component: Product,
    meta: { title: "商品" }
  },
  {
    path: "/login", component: Login,
    meta: { title: "登录" }
  },
  {
    path: "/register", component: Register,
    meta: { title: "注册" }
  },
  {
    path: "/main", component: Main,
    meta: { title: "我的" }
  },
  {
    path: "/collection", component: Collection,
    meta: { title: "收藏夹" }
  },
  {
    path: "/address", component: Address,
    meta: { title: "收货地址" }
  },
  {
    path: "/addplace", component: AddPlace,
    meta: { title: "添加收货地址" }
  },
  {
    path: "/about", component: About,
    meta: { title: "关于我们" }
  },
  {
    path: "/allorder", component: Allorder,
    meta: { title: "全部订单" }
  },
  {
    path: "/cart", component: Cart,
    meta: { title: "购物车" }
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
