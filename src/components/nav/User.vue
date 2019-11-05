<template>
    <div class="User">

    <div class='tt'>
        <div class='top'>
            <p><i class="el-icon-user"></i></p>
            <router-link to="/login" class="txt" tag="div">
                <p>{{name}}</p>
                <p>积分：0</p>
            </router-link>
        </div>
        <a>💗 新上线更稳定的科研快递查询接口</a>
    </div>
    <div class='ff'>
        <p><i class="el-icon-tickets"></i> 我的订单</p>
        <div class="flow">
            <router-link to="" tag="li">
                <i class="el-icon-money"></i>
                <p>待付款</p>
            </router-link>
            <router-link to="" tag="li">
                <i class="el-icon-takeaway-box"></i>
                <p>待发货</p>
            </router-link>
            <router-link to="" tag="li">
                <i class="el-icon-truck"></i>
                <p>待收货</p>
            </router-link>
            <router-link to="" tag="li">
                <i class="el-icon-chat-line-square"></i>
                <p>待评价</p>
            </router-link>
        </div>
    </div>

    <div class='cot'>
    <ul>
        <router-link to="" tag="li" >
            <i class="el-icon-coin" style="color:#f8662f"></i>
            <p>我的余额</p>
            <p>0元</p>
        </router-link>
        <router-link to="" tag="li" >
            <i class="el-icon-discount" style="color:#f8662f"></i>
            <p>我的砍价</p>
        </router-link>
        <router-link to="" tag="li" >
            <i class="el-icon-news" style="color:#edb449"></i>
            <p>我的礼券</p>
        </router-link>
        <router-link to="" tag="li" >
            <i class="el-icon-star-off" style="color:#edb449"></i>
            <p>我的收藏</p>
        </router-link>
        <router-link to="/address" tag="li" >
            <i class="el-icon-map-location" style="color:#5a9fec"></i>
            <p>我的地址</p>
        </router-link>
        <router-link to="" tag="li" >
            <i class="el-icon-service" style="color:#5a9fec"></i>
            <p>联系客服</p>
        </router-link>
    </ul>
</div>




    </div>
</template>

<script>
export default {
    name:'User',
    data() {
        return {
            text:'请登录',
            name:'点击登录',

        }
    },
    created() {
        
    },
    mounted() {
        var url='https://api.it120.cc/small4/user/detail?token='+this.$route.query.yz
        this.axios.post(url).then(res=>{
            console.log(res.data.data)
            console.log(res)
            if(this.$route.query.pd=='success'){
                this.name=res.data.data.base.nick
            }
        })
        console.log(this.$route.query.yz)
        console.log(this.$route.query.pd)
    },
}
</script>

<style lang='scss'>
li{
    list-style: none;
    text-align: center;
}
i{
    margin: 0.1rem;
}
.tt{
   width: 100%;
    background: white;
.top{
    width: 100%;
    height: 3rem;
    /* background-image:url("images/a3.jpg"); */
    background: #D8C8A7;
    display: flex;
}
.top>p{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: white;
    margin: 0.6rem;
}
.top>p>i{
    font-size: 1rem;
    margin: 0.25rem;
}
.txt{
    margin:0.8rem 0 0 -0.3rem;
}
.txt p{
    margin: 0.2rem
}
.tt>a{
    display: inline-block;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    color:  #d00000;
    font-size: 0.15rem;
    margin-left:0.2rem 
}
}

.ff{
    margin-top: 0.2rem;
    background: white;
.ff>p{
    height: 0.8rem;
    line-height: 0.8rem;
    margin-left: 0.2rem;
    border-bottom: 1px solid #ddd;
}
.ff>p>i{
    color: #f4b24b;
}
.flow{
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.flow i{
    font-size: 0.5rem;
    color: grey
}
}

.cot{
    background: white;
    margin-top: 0.2rem;
    height: 3.5rem;
ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}
li{
    width: 30%;
    margin: 0.3rem 0 0 0;
}
li>p{
    text-align: center
}
li>i{
    text-align: center;
    font-size: 0.5rem;
}
}
</style>