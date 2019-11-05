<template>
    <div class="Column">
        <router-link class="out" to='/home' tag='div'><</router-link>
        <h2>严选专栏</h2>
        <router-link tag="div" :to="'/columnlist?id='+item.id" class="all" v-for="(item,key) in column" :key="key">
            <img :src="item.pic" alt="">
            <div>
                <h1>{{item.title}}</h1>
                <p>{{item.descript}}</p>
                <router-link to='' tag='button' >查看详情</router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Column',
    data() {
        return {
            column:[]
        }
    },
    mounted(){
        this.axios.get('https://api.it120.cc/small4/cms/news/list').then(res=>{
            this.column=res.data.data
        })
    }
}
</script>

<style lang='scss'>
h2{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}
.Column{
    width: 100%;
    .all{
        width: 98%;
        height: 5rem;
        margin: 0 auto;
        margin-top: 0.2rem;
        img{
            width: 100%;
            height: 100%;
        }
        div{
            position: absolute;
            color: #fff;
            margin-top: -4rem;
            width: 98%;
            text-align: center;
            h1{
                font-size: 0.5rem;
            }
            p{
                width: 6rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin: 0.5rem 0;
                margin-left: 0.6rem;
                font-size: 0.3rem;
            }
            button{
                background: none;
                color: #fff;
                width: 2.5rem;
                margin-top: 0.2rem;
                height: 0.8rem;
                border: none;
                border: 1px solid #fff;
                font-size: 0.3rem;
                border-radius: 25px;
            }
        }
    }
}
</style>