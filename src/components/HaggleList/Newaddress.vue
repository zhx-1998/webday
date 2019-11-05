<template>
    <div class="Newaddress">
        <div class="yc">
            <div>
                <p><input v-model="Addressee" type="text" placeholder="收件人"></p>
                <p><input v-model="phone" type="text" placeholder="手机"></p>
                <p><input v-model="address" type="text" placeholder="地址"></p>
                <p><router-link to='/address'><button @click="add()" >添加</button></router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Newaddress',
    data() {
        return {
            list:JSON.parse(localStorage.getItem('dz'))||[],
            Addressee:'',
            phone:'',
            address:'',
        }
    },
    methods: {
        add(){
            var obj={
                Addressee:this.Addressee,
                phone:this.phone,
                address:this.address
            }
            this.list.push(obj)

            localStorage.setItem('dz',JSON.stringify(this.list))
            console.log(this.list)
        }
    },
}
</script>

<style lang='scss'>
.yc{
    width: 7.5rem;
    height: 100%;
    position: fixed;
    z-index: 199;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    div{
        text-align: center;
        height: 8rem;
        width: 100%;
        p{
            padding-top: 2.2rem;
        }
    }
}
</style>