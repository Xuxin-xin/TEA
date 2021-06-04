<template>
  <div>
    <div v-for="(item,i) in rows" :key="i" class="py-1">
      <!-- 1左侧1个图片 -->
      <div  style="width:98%;border-radius:5px" class="border m-1 p-1 center">
        <img :src="require(`@/assets/img/${item.img}`)" class="rounded w-100" />
      </div>

      <!-- 2茶叶名称 -->

      <div class="text-center">{{item.title}}</div>

      <!-- 内容简介 -->
      <div class="text-left align-items-center p-3 " style="text-indent:2em">{{item.sub_title}}</div>
    </div>
  </div>
</template>

<script>
//引入json文件->js object   list就是一个js对象
import {getNewsList} from "@/assets/js/apis/news.js" //导入接口资讯列表接口

export default { 
    data(){
      return {      
        rows:[],//微信消息列表数据，来源是json文件
      }
    },    

    created(){
      this.loadData();
    },

    methods:{
      async loadData(){
        let result=await getNewsList();
        //判断返回

        this.rows=result.data;
        console.log(result);
        }
    }
}

</script>

<style scoped>
</style>