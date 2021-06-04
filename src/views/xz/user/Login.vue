<template>
  <div>
    <!-- 学子商城的一些功能实现.... -->
    <h3 class="pt-5 pb-3">用户登录</h3>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd" class="pb-4"></mt-field>
    <mt-button type="primary" @click="login" class="w-50 mb-2" style="height:36px;border-radius:12px">登录</mt-button>
    <br />
    <mt-button type="primary" @click="register" class="w-50" style="height:35px;border-radius:12px">注册</mt-button>
  </div>
</template>

<script>
import {Login} from "@/assets/js/apis/user.js" //导入接口
export default {
    data(){
        return {
            uname:"",
            upwd:"",
        }
    },
    methods:{
        async login(){
            var uname = this.uname;
            var upwd = this.upwd;
            //要对数据进行验证 uname upwd
            var reg = /^[a-z0-9]{3,12}$/i; //正则表达式
            //验证用户名，不合格则提示后返回
            if(!reg.test(uname)){
                this.$messagebox("错误","输入的用户名格式不正确")
                return;
            }
            
            //验证用户密码，不合格则提示后返回
            if(!reg.test(upwd)){
                this.$messagebox("错误","输入的密码格式不正确")
                return;
            }
            
            var user={uname,upwd};
            // this.$indicator.open({
            //     text: '加载中...',
            //     spinnerType: 'fading-circle'
            // });

            console.log(user);    

            let result = await Login(user);
            this.$indicator.close();
            //console.log(result); //仅仅是测试看看返回是一个什么样数据
            if(result.code==200)
            {   //登录成功，跳转到商品列表
                localStorage.setItem("uname",user.uname);
                this.$router.push("/main");
            }else{
                this.$messagebox("错误",result.msg)
            }
        },
        register() {
          this.$router.push("/register");
    }
    }
}
</script>

<style>
</style>