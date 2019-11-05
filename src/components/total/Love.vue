<template>
    <div class="Love">
        <h2>猜你喜欢</h2>
        <div class="love">
            <router-link :to="'/listlist?id='+item.id" tag="div" v-for="(item,key) in love" :key="key" v-if="item">
                <img :src="item.pic" alt="">
                <h3>{{item.name}}</h3>
                <p>{{item.characteristic}}</p>
                <p>
                    <span>￥{{item.originalPrice}}.00</span>
                    <span>已售{{item.numberSells}}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Love",
    data() {
        return {
            love:[]
        }
    },
    mounted() {
        this.axios.get('https://api.it120.cc/small4/shop/goods/list').then(res=>{
            var a=parseInt(Math.random()*23)
            var b=a+4
            var e=res.data.data
            // console.log(res.data.data)
            // console.log(a)
            // console.log(b)
            // console.log(e.slice(a,b))
            this.love=e.slice(a,b)
        })
    },
}
</script>

<style lang='scss'>
.love{
    width: 7.5rem;
    display: flex;
    flex-wrap: wrap;
    

    div{
        width: 50%;
        margin-top: 0.2rem;
        img{
            width: 98%;
        }
        h3{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 3.5rem;
        }
        p:nth-of-type(1){
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            margin-top: -0.8rem;
            width: 3.5rem;
        }
        p:nth-of-type(2){
            display: flex;
            justify-content: space-between;
            padding: 0 0.4rem 0 0;
        }
    }
}
h2{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}
</style>