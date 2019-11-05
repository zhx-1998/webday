<template>
    <div class="BarginList">
        <router-link class="out" to='/home' tag='div'><</router-link>
        <div class="swiper-container ner">
            <div class="swiper-wrapper">
                <div v-for="(item,key) in banner" :key="key" class="swiper-slide"><img :src="item.pic"/></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
         <div class="details">
            <h2>{{title.name}}</h2>
            <p>{{title.characteristic}}</p>
            <p>
                <span>底价￥{{title.minPrice}}</span>
                <span>原价{{title.originalPrice}}.00</span>
                <span>库存{{title.stores}}</span>    
            </p>
        </div>
        <div class="view">
            <p class="ys">
                <span @click="Introduce()">商品介绍</span>
                <span @click="Evaluate()">商品评价</span>
            </p>
            <div class="introduce" v-show="this.show" v-html="content"></div>
            <div class="evaluate" v-show="!this.show">
               <ul>
                    <li v-for="(item,key) in evaluate" :key="key">
                        <div>
                            <i class="el-icon-s-custom"></i>    
                        </div> 
                        <div>
                            <p>匿名用户<span>{{item.goods.goodReputationStr}}</span></p>
                            <p>{{item.goods.goodReputationRemark}}</p>
                            <p>
                                <span>{{item.goods.dateReputation}}</span>
                                <span>选择规格:{{item.goods.goodsName}}</span>
                            </p>
                        </div>   
                    </li>   
                </ul> 
            </div>
        </div>
        <div class="footerkj">
            立即发起砍价，最低可砍到1元
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import '../../assets/swiper-3.4.2.min.css';
export default {
    name:'BarginList',
    data() {
        return {
            details:[],
            banner:[],
            title:[],
            content:[],
            show:true,

        }
    },
    methods: {
        Introduce(){
            this.show=true;
        },
        Evaluate(){
            this.show=false;
        }
    },
    mounted() {
        var url = 'https://api.it120.cc/small4/shop/goods/detail?id='+this.$route.query.id
        this.axios.get(url).then(res=>{
             this.banner=res.data.data.pics
             this.title=res.data.data.basicInfo
             this.content=res.data.data.content//商品详情
            this.details=res.data.data
            console.log(this.details)
        })
        var rl = 'https://api.it120.cc/small4/shop/goods/reputation?goodsId='+this.$route.query.id
        this.axios.get(rl).then(res=>{
             this.evaluate=res.data.data
             console.log(this.evaluate)
         })
       var mySwiper = new Swiper ('.swiper-container', {
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },//小圆点
            paginationClickable:true,
            clickable: true, // 允许点击小圆点跳转
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:false,//修改swiper的父元素时，自动初始化swiper 
            autoplay:{
                delay: 2000,
                disableOnInteraction: false // 手动切换之后继续自动轮播
            }
        });
    },

}
</script>

<style lang='scss'>
.evaluate{
    width: 100%;
    background: #fff;
    ul{
        list-style: none;
        li{
            display: flex;
            div:nth-of-type(1){
                width: 25%;
            }
            div:nth-of-type(2){
                p:nth-of-type(1){
                    span{
                        margin-left: 0.5rem;
                        padding: 0 0.2rem;
                        color: #fff;
                        background: red;
                    }
                }
            }
        }
    }
}
.ner{
    width: 7.5rem;
    div{
        width: 100%;
        img{
            width: 100%;
            height: 5rem;
        }
    }
}
.ys{
    display: flex;
    justify-content: space-around;
}
.view>p>span{
    width: 50%;
}
.view{
    background: #fff;
    margin-top: 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 100%;
    span{
        width: 50%;
        text-align: center;
    }
}
.view>div>p{
    height: 1.5rem;
}
.view>div>p>img{
    width: 100% !important;
    height: 100% !important;
}
.introduce{
    background: #fff;
    p{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        display: flex;
        justify-content: space-around;
    }
}
.footerkj{
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.3rem;
    background: red;
    position: fixed;
    z-index: 99;
    bottom: 0;
}
.el-icon-s-custom{
    font-size: 1.5rem;
    text-align: center;
}
.details{
        padding: 0.4rem 0.4rem;
        background: #fff;
        h2,p{
            padding: 0.2rem 0;
        }
        p:nth-of-type(2){
            display: flex;
            justify-content: space-between;
        }
    }
</style>