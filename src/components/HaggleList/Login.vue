<template>
    <div class="Login">
        <h2>账号登录</h2>
        <input v-model="mobile" type="text" placeholder="手机号码">
        <br>
        <input v-model="pwd" type="password" placeholder="密码">
        <br>
        <router-link :to="user+'?yz='+this.yz+'&'+'pd='+this.msg">
            <button @click="login()">登录</button>
        </router-link>
        <p><a href="">忘记密码</a></p>
        <p><router-link to="/register" tag="a">还没有注册？立即注册</router-link></p>
    </div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            user:'',
            mobile:null,
            pwd:null,
            msg:null,
            yz:null,
        }
    },
    methods: {
        login(){
            this.mobile=this.mobile
            this.pwd=this.pwd
            var url=`https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=${this.mobile}&pwd=${this.pwd}`
            this.axios.post(url).then(res=>{
                console.log(res.data)
                this.yz=res.data.data.token
                this.msg=res.data.msg
                if(this.msg=='success'){
                    this.user='/home/user'
                }else{
                    this.user=''
                }
            })
        }
    },
    mounted() {
    }
}
</script>

<style lang='scss'>
.Login{
    padding:0.5rem;
    height: 100%;
h2{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
}
input{
    width: 5rem;
    height: 1rem;
    border: none;
    margin-top: 1rem;
    border-radius: 5px;
    padding-left: 0.4rem;
}
button{
    width: 3.5rem;
    height: 1rem;
    margin-top: 1rem;
    border-radius: 5px;
    border:none;
    background: rgb(171,141,247)
}
}

</style>