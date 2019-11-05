<template>
    <div class="home">
        <div class="box">
           <div class="content">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
           </div>
        </div>
        <div class="footer">
           <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from './total/Footer';
export default {
    name:'Home',
    components:{Footer}

} 
</script>

<style lang='scss'>
    .home{
        padding: 0 0 1rem 0;
        width: 7.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header,.footer{
            width: 100%;
        }
        .footer{
            position:fixed;
            z-index: 99;
            bottom: 0;
            border-top: 1px solid rgba(214, 214, 214, 0.582);
        }
        .box{
            // height: 1rem;
            flex-grow: 1;
            overflow: hidden;
            .content{
                min-height: 101%;
            }
        }

    }
</style>