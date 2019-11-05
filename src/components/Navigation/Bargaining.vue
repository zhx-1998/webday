<template>
    <div class="Bargaining">
        <router-link class="out" to='/home' tag='div'><</router-link>
        <h2>砍价列表</h2>
        <ul>
            <router-link tag="li" :to="'/barginlist?id='+item.id+'&'+'goodsId='+item.goodsId" v-for="(item,key) in bargaining" :key="key" v-if="item.kanjia">
                <img :src="item.pic" alt="">
                <div class="details">
                    <h3>{{item.name}}</h3>
                    <p>{{item.characteristic}}</p>
                    <div class="price">
                        <div>
                            <p>￥{{item.minPrice}}<span v-if='item.minPrice>=1'>.00</span><span v-if="item.minPrice<=1" >0</span></p>
                            <p>底价</p>
                        </div>
                        <div>
                            <p>￥{{item.originalPrice}}.00</p>
                            <p>原价</p>
                        </div>
                        <div>
                            <p>{{item.stores}}件</p>
                            <p>限量</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Bargaining',
    data(){
        return {
            bargaining:[]
        }
    },
    mounted() {
        this.axios.get('https://api.it120.cc/small4/shop/goods/list').then(res=>{
            this.bargaining=res.data.data
        })
    },

}
</script>

<style lang='scss'>
.Bargaining{
    background: #FFF;
    h2{
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #FFF;
        border-bottom: 1px solid gray;
    }
    ul{
        li{
            height: 3rem;
            display: flex;
            border-bottom: 1px solid gray;
            padding: 0.2rem 0.1rem;
            img{
                width: 2rem;
                border-radius: 5px;
                height: 2rem;
            }
            .details{
                display: flex;
                flex-direction: column;
                padding: 0 0.2rem;
                width: 6rem;
                height: 2rem;
                justify-content: space-between; 
                .price{
                    display: flex;
                    justify-content: space-around;
                    text-align: center;
                    div{
                        padding: 0 0.3rem;
                    }
                    div:nth-of-type(3){
                        border-left: 1px solid gray;
                    }
                    div:nth-of-type(1){
                        border-right: 1px solid gray;
                    }
                }
            }
            .details,img{
                margin-top: 0.3rem;
            }
        }
    }

}
</style>