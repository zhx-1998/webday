<template>
    <div class="Address">
        <router-link class="out" to='/home/user' tag='div'><</router-link>
        <router-link to="/newaddress" href="#" class="xj">新建地址</router-link>
        <h2>我的地址</h2>
        <ul class="dzz">
            <li v-for="(item,key) in this.list" :key="key">
                <div>
                    <input @click="hq()" type="radio" name="aaa" />
                </div>
                <div>
                    <p>
                        <span>{{item.Addressee}}</span>
                        <span>{{item.phone}}</span>
                    </p>
                    <p>{{item.address}}</p>
                </div>
            </li>
        </ul>
        <!-- <Love></Love> -->
    </div>
</template>

<script>
// import Love from '../total/Love';
export default {
    naem:'Address',
    // components:{Love},
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        this.list=JSON.parse(localStorage.getItem('dz'))
        console.log(this.list)
    },
    methods: {
        hq(){
            console.log()
        }
    },
    

}
</script>

<style lang='scss'>
    .Address{
        width: 7.5rem;
        height: 100%;
        h2{
            text-align: center;
            height: 1rem;
            line-height: 1rem;
            background: #fff;
        }
    }
    .xj{
        text-decoration: none;
        font-size: 0.3rem;
        color: #000;
        position: absolute;
        z-index: 99;
        top: 15px;
        right: 15px;
    }
    .dzz{
        li{
            display: flex;
            div:nth-of-type(1){
                width: 1rem;
            }
            div:nth-of-type(2){
                margin-left: 1rem;
            }
        }        
    }
</style>