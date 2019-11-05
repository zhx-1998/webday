<template>
    <div class="special">
        <router-link tag="div" to="/column">
            <h2>精选专题></h2>
        </router-link>
        <ul>
            <router-link tag="li" :to="'/columnlist?id='+item.id" v-for="(item,key) in banner" :key="key">
                <img :src="item.pic" alt="">
                <h2>{{item.title}}</h2>
                <p>{{item.descript}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Special',
    data() {
        return {
            banner:[]
        }
    },
    mounted(){
        this.axios.get('https://api.it120.cc/small4/cms/news/list').then(res=>{
            this.banner=res.data.data
        })
    }
}
</script>

<style lang='scss'>
    .special{
        overflow: hidden;
        margin-top: 0.4rem;
        background: #FFF;
        div{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background: #FFF;
        }
        ul{
            width: 7.5rem;
            display: flex;
            overflow: auto;
            list-style: none;
            li{
                padding-left: 0.1rem;
                img{
                    width: 6rem;
                    height:2.5rem;
                    border-radius: 5px;
                }
                h2{
                    margin: 0.2rem auto;
                }
                p{
                    width: 4.5rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>