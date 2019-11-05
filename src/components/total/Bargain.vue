<template>
    <div class="Bargain">
        <router-link to="/bargaining" tag="h2">全民砍价></router-link>
        <div>
            <router-link  class="bargain" tag="div" v-if="item.stores==100" :to="'/barginlist?id='+item.id" v-for="(item,key) in popular" :key="key">
                <img :src="item.pic" alt="">
                <div>
                    <div>
                        <h2>{{item.name}}</h2>
                        <p>{{item.characteristic}}</p>
                    </div>
                    <ul>
                        <li>
                            <p>￥{{item.minPrice}}.00</p>
                            <p>底价</p>
                        </li>
                        <li>
                            <p>￥{{item.originalPrice}}.00</p>
                            <p>原价</p>
                        </li>
                        <li>
                            <p>{{item.stores}}件</p>
                            <p>限量</p>
                        </li>
                    </ul>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Bargain',
    data(){
        return{
            popular:[]
        }
    },
    mounted(){
        this.axios.get('https://api.it120.cc/small4/shop/goods/list').then(res=>{
            this.popular=res.data.data
        })
    }

}
</script>

<style lang='scss'>
    .Bargain>h2{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
    }
    .Bargain{
        margin-top: 0.4rem;
        background: #fff;
        div{
            .bargain{
                border-top: 1px solid gray;
                padding: 0.1rem 0;
                display: flex;
                padding: 0.1rem 0.1rem;
                img{
                    width: 1.5rem;
                    height: 2rem;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    justify-content: space-between; 
                    div{
                        padding-left: 0.6rem;
                        p{
                            margin-top: 0.1rem;
                        }
                    }
                    ul{
                        list-style: none;
                        display: flex;
                        justify-content: space-around;
                        li{
                            p{
                                text-align: center;
                            }
                            p:nth-of-type(2){
                                margin-top: 0.1rem
                            }
                        }
                    }
                }
            }
        }
    }
</style>