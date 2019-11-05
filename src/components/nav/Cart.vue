<template>
    <div class="cart">
        <h2>购物车</h2>
        <!-- <img src="../../assets/goods_empty.1ac6d387.png" > -->
        <div class="shop" v-for="(item,key) in this.ptt" :key="key">
            <input v-model="item.checked" :value="item.id" class="dx" @click="fx(item,key)" type="checkbox">
            <img :src="item.img" alt="">
            <div>
                <h3>{{item.title}}</h3>
                <p>{{item.sku}}{{item.skuall.name}}{{item.sku2}}{{item.skuall2.name}}</p>
                <p>
                    <span>￥{{item.pirce}}</span>
                    <span>
                        <input :disabled='item.zhi==1' @click="zhi(item)" type="button" value="-">
                        <input v-model="item.zhi" type="text">
                        <input @click="zhij(item)" type="button" value="+">
                        <input @click="sp(key)" type="button" value="删除">
                    </span>
                </p>
            </div>
        </div>
        <Love></Love>
        <div id="xd">
            <div>
                <span><input @click="qx" v-model='flag' type="checkbox">全选</span>
                <span>合计：￥{{spirceall()}}</span>
            </div>
            <div><router-link to='/confirmation' tag="input" type="button" value="下单" />></div>
        </div>
    </div>
</template>

<script>
import Love from '../total/Love';
export default {
    name:'Cart',
    components:{Love},
    data() {
        return {
            // add:'disabled',
            ptt:[],
            flag:true,
            dd:[],
            xd:[]
        }
    },
    mounted() {
        this.ptt=this.$store.state.list
        console.log(this.ptt)
        localStorage.setItem('fun',JSON.stringify(this.ptt))
    },
    watch: {
        // flag:function(newval,oldval){
        //     //属性的值发生改变的时候会自动的被调用
        //     if(newval==false){
        //         this.dd=[]
        //     }
        //     console.log(oldval)
        // }
        ptt:function(newval,oldval){
            //属性的值发生改变的时候会自动的被调用
            this.$store.state.list.forEach(element => {
                if(element.checked==true){
                    this.xd.push(element)
                    console.log(this.xd)
                }
            });
            this.ptt=this.ptt
            console.log(this.xd)
		}
    },
    methods: {
        spirceall(){
            var num=0
            this.ptt.forEach(element => {
                num+=element.pirce*element.zhi
            });
            return num
        },
        sp(key){
            this.ptt.splice(key,1)
            localStorage.setItem('fun',JSON.stringify(this.ptt))
            console.log(this.ptt)
        },
        fx(item,key){
            if(item.checked==false){
                this.flag=true
            }else{
                this.flag=false
            }
            this.ptt=this.ptt
            localStorage.setItem('fun',JSON.stringify(this.ptt))
        },
        qx(){
            this.$store.commit("allchecked",this.flag)
            localStorage.setItem('fun',JSON.stringify(this.ptt))
        },
        zhi(item){
            item.zhi--
            localStorage.setItem('fun',JSON.stringify(this.ptt))
        },
        zhij(item){
            item.zhi++
            localStorage.setItem('fun',JSON.stringify(this.ptt))
        }
    },
}
</script>

<style lang='scss'>
#xd{
    width: 7.5rem;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    position: fixed;
    bottom: 1rem;
    background: #FFF;
    div:nth-of-type(1){
        width: 66%;
    }
    div:nth-of-type(2){
        width: 33%;
        input{
            width: 100%;
            height: 100%;
            background: red;
            border: none;
        }
    }
}
    .cart{
            background: #FFF;
            padding: 0 0 1rem 0;
            .shop{
                display: flex;
                height: 1.5rem;
                padding: 0 0.2rem;
                margin-top: 0.2rem;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
                >input{
                    margin-top: 0.6rem;
                }
                div{
                    margin-left: 0.4rem;
                    width: 100%;
                    height: 1.3rem;
                    margin-top: 0.1rem;
                    h3,p{
                        height: 25%;
                    }
                    p:nth-of-type(2){
                        display: flex;
                        justify-content: space-between;
                        span:nth-of-type(2){
                            input{
                                width: 0.5rem;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        h2{
        }
        .Love{
            background: #FFF;
        }

    }
</style>