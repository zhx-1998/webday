<template>
    <div class="Jump">
        <Banner></Banner>
        <Bargain></Bargain>
        <Special></Special>
        <Recommend></Recommend>
    </div>
</template>

<script>
import Footer from './total/Footer';
import Recommend from './total/Recommend';
import Special from './total/Special';
import Banner from './total/Banner';
import Bargain from './total/Bargain';
export default {
    name:'Jump',
    components:{Banner,Bargain,Special,Recommend,Footer}
}
</script>

<style lang='scss'>

</style>