<template>
    <div class="Banner">
        <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="(item,key) in banner" :key="key">
        <img :src='item.picUrl' alt="">
        </el-carousel-item>
        </el-carousel>

        <div class="nav">
            <router-link tag="div" to="/sigin">
                <img src="../../assets/a.png" alt="">
                <p href="#">签到</p>
            </router-link>
            <router-link tag="div" to="/gift">
                <img src="../../assets/b.png" alt="">
                <p href="#">礼卷</p>
            </router-link>
            <router-link tag="div" to="/bargaining">
                <img src="../../assets/c.png" alt="">
                <p href="#">砍价</p>
            </router-link>
            <router-link tag="div" to="/column">
                <img src="../../assets/f.png" alt="">
                <p href="#">专栏</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    data(){
        return{
            banner:[]
        }
    },
    mounted(){
        this.axios.get('https://api.it120.cc/small4/banner/list').then((res)=>{
            this.banner=res.data.data
        })
    }
}
</script>

<style lang='scss'>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-carousel__container{
    height: 7.4rem;
}

.el-carousel img{
    width: 100%;
    height: 100%;
}

.nav{
    width: 100%;
    height: 1.7rem;
    display: flex;
    justify-content: space-around;
    border-radius: 20% 20% 0 0;
    background: #FFF;
    position: relative;
    z-index: 9;
    margin-top: -0.5rem;
    div{
        img{
            width: 0.9rem;
            height: 0.9rem;
            display: block;
            margin: 0.2rem auto;
        }
        p{
            display: block;
            text-align: center;
            font-size: 0.2rem;
        }
    }
}
</style>