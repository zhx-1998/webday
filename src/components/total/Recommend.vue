<template>
    <div class="Recommend">
        <h2>人气推荐></h2>
        <ul>
            <li>
                <img src="https://dcdn.it120.cc/2019/07/24/a1fbfafc-07c3-4550-8d29-00265d665507.jpg" alt="便携式高清投影仪">
                <p>￥1.00</p>
            </li>
            <li>
                <img src="https://dcdn.it120.cc/2019/07/24/e2d4f82f-f9af-48ff-9865-61561fd4c2f1.jpg" alt="重返校园男式连帽牛仔外套">
                <p>￥1.00</p>
            </li>
            <li>
                <img src="https://cdn.it120.cc/apifactory/2018/11/06/035117f304fe7d475f4f2b3b317e7719.png" alt="男式天鹅绒保暖牛仔裤">
                <p>￥1.00</p>
            </li>
            <li>
                <img src="https://dcdn.it120.cc/2019/07/24/a30b67dd-61be-41bd-841c-7e3f8844e958.jpg" alt="男式羊羔绒休闲外套">
                <p>￥1.00</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Recommend',
    data() {
        return {
            Recommend:[]
        }
    },
    mounted(){
        this.axios.get('https://api.it120.cc/small4/shop/goods/list').then(res=>{
            this.Recommend=res.data.data
        })
    }
}
</script>

<style lang='scss'>
    .Recommend{
       margin-top: 0.4rem;
       background: #FFF;
       h2{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background: #FFF;
       }
       ul{
           width: 100%;
           list-style: none;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-around;
           li{
               width: 48%;
               img{
                   width: 100%;
                   height: 5rem;
               }
               p{
                   text-align: center;
               }
           }
       }
    }
</style>