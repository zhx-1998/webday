<template>
    <div class="Classlist">
        <router-link class="out" to='/home/classify/classifytwo' tag='div'><</router-link>
        <h2>分类商品</h2>
        <img v-if="pdd" src="../../assets/goods_empty.1ac6d387.png" alt="">
        <div class="all">
            <router-link tag="div" :to="'/listlist?id='+item.id" v-for="(item,key) in list" :key="key">
                <img :src="item.pic" alt="">
                <h3>{{item.name}}</h3>
                <p>{{item.characteristic}}</p>
                <p>
                    ￥{{item.minPrice}}
                    <span v-if='item.minPrice>=1'>.00</span>
                    <span>已售{{item.numberSells}}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Classlist',
    data() {
        return {
            list:[],
            pdd:true,
        }
    },
    mounted() {
        var url='https://api.it120.cc/small4/shop/goods/list?id='+this.$route.query.id
        this.axios.get(url).then(res=>{
            for(var i in res.data.data){
                if(this.$route.query.id==res.data.data[i].categoryId){
                    this.list.push(res.data.data[i])
                    this.pdd=false
                }
            }
        })
    },

}
</script>

<style lang='scss'>
h2{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}
.all{
    width: 98%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    div{
        width: 50%;
        img{
            width: 98%;
            height: 2rem;
        }
    }
}
</style>