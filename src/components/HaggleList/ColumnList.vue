<template>
    <div class="ColumnList">
        <router-link class="out" to='/home' tag='div'><</router-link>
        <h2>严选专栏</h2>
        <div>
            <div v-text="details.title"></div>
            <div v-html="details.content"></div>
        </div>
        <Love></Love>
    </div>
</template>

<script>
import Love from '../total/Love';
export default {
    name:'ColumnList',
    components:{Love},
    data() {
        return {
            details:[],
        }
    },
    mounted() {
        var url="https://api.it120.cc/small4/cms/news/detail?id="+this.$route.query.id
        this.axios.get(url).then(res=>{
            this.details=res.data.data
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
</style>