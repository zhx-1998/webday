<template>
    <div class="Classifytwo">
        <router-link :to="'/classlist?id='+item.id" tag="div" v-for="(item,key) in arr" :key="key" >
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
        </router-link>
    </div>
</template>

<script>
import Bus from '@/bus.js';
export default {
    name:'Classifytwo',
    data(){
        return{
            list:[],
            arr:[]
        }
    },
    mounted(){
        this.getData()
        Bus.$on('fn',(res)=>{
            this.arr=[]
            this.arr=res
        })
    },
    methods:{
        getData(){
            this.axios.get('https://api.it120.cc/small4/shop/goods/category/all').then(res=>{
                this.arr=res.data.data
                this.list=res.data.data
                // console.log(res)
            })
        }
    },
    watch:{
        $route(){
            this.arr=[]
            var pid = this.$route.query.id
            for(var i in this.list){
                if(this.list[i].pid==pid){
                    this.arr.push(this.list[i])
                    this.$route.query.id=''
                }
            }
        }
    }
}
</script>

<style lang='scss'>
    .Classifytwo{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        div{
            width: 33.3%;
            img{
                width: 100px;
                height: 100px;
                display: block;
                margin: 0 auto;
            }
            p{
                text-align: center;
            }
        }
    }
</style>