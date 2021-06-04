<template>
  <div>
    <img src="../../../assets/img/9.jpg" alt="" class="w-25 pt-4 pb-2">
    <p class="m-0">收藏夹空空的</p>
    <p>快去商城寻找心仪的商品吧</p>
    <button @click="shop">商城</button>
  </div>
</template>

<script>
export default {
   methods:{
      shop(){
          this.$router.push("/product");
      }
   }
}
</script>

<style>
button{
  border:2px rgb(166, 136, 173) solid;
  border-radius: 5px;
  font-size: 16px;
  background: rgb(166, 136, 173);
  color: #eee;
  box-shadow: 3px 4px rgba(150, 146, 146, 0.486);
}
</style>