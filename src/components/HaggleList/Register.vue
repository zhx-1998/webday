<template>
    <div class="Register">
        <h1>新用户注册</h1>
        <p>很高兴您将成为商城的会员(注册只需一部)</p>
        <input v-model="mobile" type="text" placeholder="手机号">
        <br>
        <input v-model="pwd" :type="password" placeholder="密码"><button @click="xs()">显示密码</button>
        <br>
        <input :type="password" placeholder="确认密码"><button @click="xs()">显示密码</button>
        <br>
        <input v-model="nick" type="text" placeholder="用户名">
        <br>
        <input v-model="picCode" type="text" placeholder="图形验证码">
        <img @click="ang()" :src="`https://api.it120.cc/small4/verification/pic/get?key=${key}`" alt="">
        <br>



        <br>
        <input v-model="code" type="text" placeholder="请输入验证码"><button @click="Obtain()">获取验证码</button>
        <br>
        <router-link :to='login'>
            <button @click="register()">立即注册</button>
        </router-link>
        <p><router-link to="/login" tag="a">已有账号？立即登录</router-link></p>
    </div>
</template>

<script>
export default {
    name:'Register',
    data() {
        return {
            pwd:null,
            code:null,
            nick:null,
            province:null,
            city:null,
            postjsonString:[],
            password:'password',
            mobile:null,
            picCode:null,
            key:parseInt(Math.random()*100),
            login:'/register'
        }
    },
    mounted() {
        // this.axios.get('https://api.it120.cc/common/region/province').then(res=>{
            
        // })
    },
    methods: {
        xs(){
            console.log(this.value1)
        },
       ang(){
           this.key=parseInt(Math.random()*100)
       },
       Obtain(){
           if(this.mobile==''){
               return false
           }
            this.mobile=this.mobile;
            this.picCode=this.picCode
            var url=`https://api.it120.cc/small4/verification/sms/get?mobile=${this.mobile}&key=${this.key}&picCode=${this.picCode}`
            this.axios.post(url).then(res=>{
                console.log(res.data)
            })
            this.key=parseInt(Math.random()*100)
       },
       register(){
           this.mobile=this.mobile
           this.pwd=this.pwd
           this.code=this.code
           this.nick=this.nick
           this.province=this.province
           this.city=this.city
           this.postjsonString=this.postjsonString
           var url=`https://api.it120.cc/small4/user/m/register?mobile=${this.mobile}&pwd=${this.pwd}&code=${this.code}&nick=${this.nick}&province=${this.province}&city=${this.city}&postJsonString=${this.postJsonString}`
            console.log(url)
            this.axios.post(url).then(res=>{
                console.log(res)
                if(res.data.msg=='success'||res.data.msg=="user has exists"){
                    this.login='/login'
                }
            })
       }
    },
}
</script>

<style lang='scss'>
.Register{
    padding: 0.4rem;
    h1{
        font-size: 0.6rem;
    }
    input{
        width: 4rem;
        margin-top: 0.4rem;
    }
}

</style>