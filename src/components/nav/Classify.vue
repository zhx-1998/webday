<template>
    <div class="Classify">
        <div class="header">
            <div class="pla">
                <input type="text" placeholder="搜索商品">
            </div>
            <div class="category">
                <ul>
                    <li @click="all()">所有分类</li>
                    <router-link tag="li" :to="'/home/classify/classifytwo?id='+item.id" v-if='item.level==1' v-for="(item,key) in listall" :key="key">{{item.name}}</router-link>
                </ul>

                <section>
                    <div class="swiper-container">
                        <div class="swiper-wrapper banner">
                            <div class="swiper-slide"><img src="../../assets/123.png"/></div>
                            <div class="swiper-slide"><img src="../../assets/123.png"/></div>
                            <div class="swiper-slide"><img src="../../assets/123.png"/></div>
                        </div>
                         <div class="swiper-pagination"></div>
                    </div>
                    <router-view></router-view>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Bus from '@/bus.js';
import Swiper from 'swiper';
import '../../assets/swiper-3.4.2.min.css';
export default {
    name:'Classify',
    data() {
        return {
            listall:[],
            // arr:[],
            // list:[
            //     {
            //         index:0,
            //         title:'所有分类',
            //         type:'all'
            //     },
            //     {
            //         index:1,
            //         title:'居家',
            //         type:'jujia2'
            //     }
            // ]
        }
    },
    mounted() {
        this.axios.get('https://api.it120.cc/small4/shop/goods/category/all').then(res=>{
            this.listall=res.data.data
        })
         var mySwiper = new Swiper('.swiper-container', {
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },//小圆点
            paginationClickable:true,
            clickable: true, // 允许点击小圆点跳转
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:false,//修改swiper的父元素时，自动初始化swiper 
            onSlideChangeEnd: function(swiper){
                swiper.update();  
                mySwiper.reLoop();  
                mySwiper.startAutoplay();
            },
            autoplay:{
                delay: 2000,
                disableOnInteraction: false // 手动切换之后继续自动轮播
            }
        })
    },
    methods: {
        all(){
            Bus.$emit('fn',this.listall)
        },
        // filter(item){
        //     this.arr=this.listall.filter(items=>{
        //         return item.type===items.type
        //     })
        //     if(item.type=='all'){
        //         this.arr=this.listall
        //     }
        // }
    },
}
</script>

<style lang='scss'>
.Classify{
    width: 7.5rem;
    height: 100%;
    background: #FFF;
    .header{
        .pla{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            input{
                background: #dddddd60;
                width: 5rem;
                height: 0.5rem;
                border: none;
                border-radius: 25px;
                margin-left: 0.4rem;
                padding-left: 0.4rem;
            }
        }
        .category{
            width: 100%;
            display: flex;
            padding: 0 0 2rem 0;
            ul{
                width: 30%;
                height: 100%;
                text-align: center;
                li{
                    height: 1rem;
                    line-height: 1rem;
                }
            }
            section{
                width: 70%;
            }
        }
    }
}
.banner{
    width: 100%;
    display: flex;
    text-align: center;
    img{
        height: 2rem;
        width: 90%;
        border-radius: 5px;
    }
}
</style>