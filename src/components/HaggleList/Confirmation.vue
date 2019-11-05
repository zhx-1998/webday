<template>
    <div class="Confirmation">
        <router-link class="out" to='/home/cart' tag='div'><</router-link>
        <h2>确认订单</h2>
        <div class="sp">
            <h3>商品列表</h3>
            <div v-for="(item,key) in this.list" :key="key">
                <img :src="item.img" alt="">
                <div>
                    <h3>
                        <span>{{item.title}}</span>
                        <span>￥{{item.pirce}}</span>
                    </h3>
                    <p>{{item.sku2}}{{item.skuall2}}</p>
                    <p>
                        <span>{{item.sku}}{{item.skuall}}</span>
                        <span>X{{item.zhi}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="ps">
            <p><span>配送方式</span><span>快递</span></p>
            <p><span>备注</span><input placeholder="如需要备注请输入" type="text"></p>
        </div>  
        <div class="price">
            <p>
                <span>商品金额</span>
                <span>￥{{priceall()}}</span>
            </p>
        </div>
        <div class="footer">
            <span>合计：￥{{1}}</span>
            <span><button>提交订单</button></span>
        </div>
    </div>

</template>

<script>
export default {
    name:'Confirmation',
    data() {
        return {
            list:[],
            dz:JSON.parse(localStorage.getItem('dz'))||[]
        }
    },
    methods: {
        priceall(){
            var num=0
            this.list.forEach(element => {
                num+=element.pirce*element.zhi
                
            });
            return num
        }
    },
    mounted() {
        console.log(this.dz)
        var bb = JSON.parse(localStorage.getItem('fun'))
        bb.forEach(element => {
            if(element.checked==true){
                this.list.push(element)
            }
        });
        console.log(this.list)
    },
}
</script>

<style lang='scss'>
    .Confirmation{
        .footer{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            display: flex;
            background: #fff;
            position:fixed;
            bottom: 0;
            span{
                display: block;
            }
            span:nth-of-type(1){
                width: 70%;
                text-align: right;
                color: red;
                padding-right: 0.2rem;
            }
            span:nth-of-type(2){
                width: 30%;
                button{
                    width: 100%;
                    height: 100%;
                    background: red;
                    border: none;
                    color: #fff;
                }
            }
        }
        >h2{
            text-align: center;
            line-height: 1rem;
        }
        background: #fff;
        height: 1rem;
        .ps{
            margin-top: 0.2rem;
            background: #fff;
            p{
                height: 1rem;
                border-bottom: 1px solid gray;
                line-height: 1rem;
                margin-left: 0.2rem;
                input{
                    border: none;
                    margin-left: 0.5rem;
                }
            }
        }
        .sp{
            margin-top: 0.2rem;
            background: #fff;
            >h3{
                margin-left: 0.2rem;
                height: 1rem;
                line-height: 1rem;
                border-bottom: 1px solid gray;
            }
            >div{
                display: flex;
                margin-top: 0.2rem;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-left: 0.2rem;
                }
                >div{
                    margin-left: 0.2rem;
                    width: 100%;
                    h3{
                        display: flex;
                        justify-content: space-between;
                        padding-right: 0.2rem;
                    }
                    p:nth-of-type(2){
                        display: flex;
                        justify-content: space-between;
                        padding-right: 0.2rem;
                    }

                }
            }
        }
        .price{
            margin-top: 0.2rem;
            background: #fff;
            p{
                display: flex;
                justify-content: space-between;
                padding: 0 0.2rem;
            }
        }
    }

</style>