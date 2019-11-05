<template>
    <div class="Gift">
        <router-link class="out" to='/home' tag='div'><</router-link>
        <div class="header">
            <div class="header-background">
                <div>
                    <input type="text" placeholder="请输入礼卷码">
                    <button>兑换</button>
                </div>
            </div>
        </div>
        <div class="Gift-footer">
            <div class="Coupon">
                <div class="Coupon-top">
                    <div class="Coupon-left">
                        1元
                    </div>
                    <div class="Coupon-right">
                        <div>
                            <p>满减1</p>
                            <p>满100元使用</p>
                        </div>
                        <div>
                            <button>立即领取</button>
                        </div>
                    </div>
                </div>
                <div class="Coupon-bottom">
                    <div class="yuan"></div>
                    领取7天内有效
                </div>
            </div>
            <div class="Coupon">
                <div class="Coupon-top">
                    <div class="Coupon-left">
                        0元
                    </div>
                    <div class="Coupon-right">
                        <div>
                            <p>满减</p>
                            <p>满10元使用</p>
                        </div>
                        <div>
                            <button>立即领取</button>
                        </div>
                    </div>
                </div>
                <div class="Coupon-bottom">
                    <div class="dian"></div>
                    领取7天内有效
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Gift',

}
</script>

<style lang='scss'>
.Gift{
    .header{
        background: rgb(253,251,239);
        height:4.5rem;
        padding-top: 2.5rem;
        .header-background{
            width: 90%;
            height: 1rem;
            background: #fff;
            margin: 0 auto;
            display: flex;
            padding-top: 0.1rem;
            div{
                margin: 0 auto;
                input{
                width: 4rem;
                height: 0.8rem;
                border-radius: 5px;
                border: none;
                border: 1px solid rgb(250,137,61);
                margin-right: 0.2rem;
                }
                ::-webkit-input-placeholder{
                    color: rgb(250,137,61);
                }
                button{
                    width: 1rem;
                    height: 0.8rem;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    background: rgb(238,124,123)
                }
            }
        }
    }
    .Gift-footer{
        padding: 0 0.2rem 0 0.2rem;
        margin-top: 0.4rem;
        .Coupon{
            width: 100%;
            background: rgb(236, 120, 119);
            margin: 0.2rem auto;
            height: 2rem;
            color: #fff;
            font-size: 0.4rem;
            .Coupon-top{
                height: 1rem;
                display: flex;
                .Coupon-left{
                    width: 30%;
                    text-align: center;
                    line-height: 1rem;
                }
                .Coupon-right{
                    width: 70%;
                    display: flex;
                    justify-content: space-around;
                    div:nth-of-type(1){
                        p{
                            padding-top: 0.05rem;
                        }
                    }
                    div:nth-of-type(2){
                        button{
                            width: 1rem;
                            height: 0.4rem;
                            border: none;
                            border-radius: 5px;
                            background:rgb(252,232,231);
                            color: rgb(236, 120, 119);
                            margin: 0.3rem auto;
                        }
                    }
                }
            }
            .Coupon-bottom{
                height: 1rem;
                line-height: 1rem;
                padding-left: 0.4rem;
                background: rgb(204,119,115);
            }
        }
    }
}
    .dian{
        border-bottom: 0.1rem dotted rgb(204,119,115);
        position: absolute;
        width: 7.1rem;
        top: 8.04rem;
        left: 0.2rem;
    }
    .yuan{
        border-bottom: 0.1rem dotted rgb(204,119,115);
        position: absolute;
        width: 7.1rem;
        top: 5.85rem;
        left: 0.2rem;
    }
</style>