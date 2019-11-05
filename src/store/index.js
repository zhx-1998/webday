import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
var state = {
        list:JSON.parse(localStorage.getItem('fun'))||[]
}
var mutations = {
    bend(state,item){
        state.list.push(item)
    },
    allchecked(state,flag){
        state.list.forEach(item=>{
            if(flag==true){
                item.checked=false
            }else{
                item.checked=true
            }
        })
    },
}

var getters = {

}

var actions = {

}

var store = new Vuex.Store({state,mutations,getters,actions})
export default store