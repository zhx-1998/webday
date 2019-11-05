<template>
    <div class="Sigin">
        <div class="top">
            <div class="sigin-header">
                <p>您可用的积分为</p>
                <h2>999</h2>
            </div>
            <div class="sigin-footer"></div>
        </div>
        <div class="bottom">
            <div class="sigin">
                <input type="button" value="签到">
            </div>
            <div class="bottom-bottom">
                <div>
                    <router-link type="button" value="去购物" to='/home' tag='input'></router-link>
                </div>
                <div>
                    <router-link type="button" value="去兑换" to='/gift' tag='input'></router-link>
                </div>
            </div>
        </div>
        <router-link class="out" to='/home' tag='div'><</router-link>
    </div>
</template>

<script>
export default {
    name:'Sigin',

}
</script>

<style lang='scss'>
    .Sigin{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            .sigin-header{
                height: 3.5rem;
                background: rgb(243,237,221);
                padding-top: 1.4rem;
                text-align: center;
                p{
                    padding-bottom: 0.4rem;
                    font-size: 0.4rem;
                }
                h2{
                    font-size: 0.4rem;
                }
            }
            .sigin-footer{
                height: 1.5rem;
                background: rgb(232,225,207);
            }
        }
        .bottom{
            width: 100%;
            .sigin{
                height: 2rem;
                padding-top: 0.7rem;
                input{
                    width: 3rem;
                    height: 0.5rem;
                    border: none;
                    border-radius: 15px;
                    color: #FFF;
                    display: block;
                    margin: 0 auto;
                    background: rgb(179,160,120);
                }
            }
            .bottom-bottom{
                width: 100%;
                div{
                    width: 90%;
                    height: 2rem;
                    line-height: 2rem;
                    border-radius: 5px;
                    margin: 0 auto;
                    margin-top: 0.2rem;
                    input{
                        margin-left: 5rem;
                        width: 1rem;
                        height: 0.3rem;
                        color: #FFF;
                        border: none;
                        border-radius: 5px;
                    }
                }
                div:nth-of-type(1){
                    background: rgb(244,235,226);
                    input{
                        background: rgb(225,182,140);
                    }
                }
                div:nth-of-type(2){
                    background: rgb(237,230,214);
                    input{
                        background: rgb(179,160,120);
                    }
                }
            }
        }
    }
</style>