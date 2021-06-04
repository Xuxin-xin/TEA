<template>
  <div>
      <div class="address-one px-4 pt-3" style="background-color:#eee;height:50px;">
        <span style="float:left">配送地址</span>
        <span style="float:right;color:blue;" @click="addPlace">+添加地址</span>
      </div>
  </div>
</template>

<script>
export default {
   methods:{
     addPlace(){
        this.$router.push("/addplace");
     }
   }
}
</script>

<style>

</style>