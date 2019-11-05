<template>
    <div class="App">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name:'App',
    

}
</script>

<style lang='scss'>
*{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}

body{
    background: #dddddd60;
}
.App{
    font-size: 0.2rem;
    width: 7.5rem;
}

</style>