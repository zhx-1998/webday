<template>
    <div class="ListList">
        <div class="back">
            <router-link class="out" to='/home/classify/classifytwo' tag='div'><</router-link>
            <div class="swiper-container">
                <div class="swiper-wrapper ner">
                    <div v-for="(item,key) in banner" :key="key" class="swiper-slide"><img :src="item.pic"/></div>
                </div>
                    <div class="swiper-pagination"></div>
            </div>
            <div class="details">
                <h2>{{title.name}}</h2>
                <p>{{title.characteristic}}</p>
                <p>
                    <span>底价￥{{title.minPrice}}</span>
                    <span>原价{{title.originalPrice}}.00</span>
                    <span>库存{{title.numberSells}}</span>    
                </p>
            </div>
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
        <div class="footerll">
            <i class="el-icon-service"></i>
            <router-link tag="i" to="/home/cart" class="el-icon-shopping-cart-2"></router-link>
            <i class="el-icon-star-off"></i>
            <span>立即购买</span>
            <span @click="jr()">加入购物车</span>
        </div>
        <div class="plss" v-show="dis">
            <div class="block">
                <div class="hed">
                    <img :src="this.pic" alt="">
                    <div>
                        <h3>
                            <span>{{title.name}}</span>
                            <span @click="noe()">x</span>
                        </h3>
                        <p>￥{{title.minPrice}}
                            <span v-if="title.minPrice>=1">.00</span>
                        </p>
                    </div>
                </div>
                <div class="bod">
                   <div v-if="this.properties.length>=1">
                       <p>{{this.properties[0].name}}</p>
                       <p>
                           <span :class="{add:key==pdd}" @click="color(item,key)" v-for="(item,key) in this.properties[0].childsCurGoods" :key="key">{{item.name}}</span>
                       </p>
                   </div>
                   <div v-if="this.properties.length==2">
                       <p>{{this.properties[1].name}}</p>
                       <p>
                           <span @click="color2(item,key)" v-for="(item,key) in this.properties[1].childsCurGoods" :key="key">{{item.name}}</span>
                       </p>
                   </div>
                </div>
                <div class="num">
                    <span>购买数量</span>
                    <span>
                        <input :disabled='add' @click="num()" type="button" value="-">
                        <input v-model="zhi" type="text">
                        <input @click="num2()" type="button" value="+">
                    </span>
                </div>
                <div @click="bend()" class="foot">
                    加入购物车
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store/index';
import Swiper from 'swiper';
import '../../assets/swiper-3.4.2.min.css';
export default {
    name:'ListList',
    data() {
        return {
            banner:[],
            title:[],
            content:[],
            show:true,
            evaluate:[],
            dis:false,
            pic:'',
            zhi:1,
            add:'disabled',
            pdd:'',
            properties:[],
            obj:{
                img:'',
                title:'',
                pirce:'',
                zhi:'',
                sku:'',
                skuall:'',
                sku2:'',
                skuall2:'',
                id:'',
                checked:true
            },
            err:JSON.parse(localStorage.getItem('fun'))||[],
        }
    },
    watch:{
        zhi:function(val) {
            if(this.zhi<=1){
               this.add="disabled"
            }else if(this.zhi>1){
                this.add=null
            }
        }
    },
    methods: {
        color(item,key){
            this.obj.img=this.pic
            this.obj.title=this.title.name
            this.obj.pirce=this.title.minPrice
            this.obj.id=this.properties[0].id
            this.obj.sku=this.properties[0].name
            this.obj.skuall=this.properties[0].childsCurGoods[key]
        },
        
        color2(item,key){
            this.obj.sku2=this.properties[1].name
            this.obj.skuall2=this.properties[1].childsCurGoods[key]
        },
        bend(){
            this.err.push(this.obj)
            var item=this.obj
            this.$store.commit('bend',this.obj)
            this.dis=false
        },
        noe(){
            this.dis=false
        },
        jr(){
            this.dis=true
        },
        Introduce(){
            this.show=true;
        },
        Evaluate(){
            this.show=false;
        },
        num(){
            this.zhi--
            this.obj.zhi=this.zhi
        },
        num2(){
            this.zhi++
            this.obj.zhi=this.zhi
        }
    },
    created() {
    },
     mounted() {
         var url = 'https://api.it120.cc/small4/shop/goods/detail?id='+this.$route.query.id
         var rl = 'https://api.it120.cc/small4/shop/goods/reputation?goodsId='+this.$route.query.id
         this.axios.get(url).then(res=>{
            this.banner=res.data.data.pics
            this.title=res.data.data.basicInfo
            this.content=res.data.data.content//商品详情
            this.pic=res.data.data.basicInfo.pic
            this.properties=res.data.data.properties
            console.log(this.properties)
         })
         this.axios.get(rl).then(res=>{
             this.evaluate=res.data.data
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
            autoplay:{
                delay: 2000,
                disableOnInteraction: false // 手动切换之后继续自动轮播
            }
        })
    },

}
</script>

<style lang='scss'>
.abd{
    border: red 1px solid;
    color: red;
}

.plss{
    width: 7.5rem;
    height: 100%;
    position: fixed;
    z-index: 199;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .block{
        position: absolute;
        bottom: 0;
        background: #fff;
        width: 7.5rem;
        padding: 0 0.4rem;
        .hed{
            width: 100%;
            height: 1.5rem;
            display: flex;
            border-bottom: 1px solid #000;
            img{
                width: 1.5rem;
                height: 1rem;
                margin: 0.2rem 0;
            }
            div{
                margin-left: 0.2rem;
                margin-top: 0.2rem;
                width: 100%;

                h3{
                    display: block;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    span:nth-of-type(2){
                        font-size: 0.3rem;
                        padding: 0 0.1rem;
                        border: 1px solid #000;
                        border-radius: 50%;
                    }
                }
                p{
                    margin-top: 0.4rem;
                }
            }
        }
        .bod{
            min-height: 1.5rem;
            padding: 0.3rem 0;
            border-bottom: 1px solid #000;
            font-size: 0.25rem;
            width: 7.5rem;
            div{
                min-height: 1rem;
                p:nth-of-type(2){
                    min-height: 1rem;
                    line-height: 1rem;
                    span{
                        margin-right: 0.2rem;
                        padding: 0.1rem 0.2rem;
                        border: 1px solid #000;
                        border-radius: 5px;
                    }
                    span:hover{
                        color: red;
                        border: 1px solid red;
                    }
                }
            }
        }
        .num{
            height: 1.5rem;
            border-bottom: 1px solid #000;
            line-height: 1.5rem;
            display: flex;
            justify-content: space-between;
            span{
                input{
                    padding: 0 0.2rem;
                    width: 0.8rem;
                }
            }
        }
        .foot{
            height: 1rem;
            line-height: 1rem;
            background: red;
            color: #fff;
            font-size: 0.5rem;
            text-align: center;
        }
    }
}
.ys{
    display: flex;
    justify-content: space-around;
}
.el-icon-s-custom{
    font-size: 1.5rem;
    text-align: center;
}
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
.footerll{
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    display: flex;
    justify-content: space-around;
    border-top: gray 1px solid;
    z-index: 99;
    bottom: 0;
    background: #fff;
    i{
        font-size: 0.7rem;
        line-height: 1rem;
    }
    span{
        font-size: 0.3rem;
    }
}
.back{
    background: #fff;
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
.details{
    padding: 0.4rem 0.4rem;
    h2,p{
        padding: 0.2rem 0;
    }
    p:nth-of-type(2){
        display: flex;
        justify-content: space-between;
    }
}
</style>