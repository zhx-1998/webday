import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import Jump from '../components/Jump.vue';
import Classify from '../components/nav/Classify.vue';
import Cart from '../components/nav/Cart.vue';
import User from '../components/nav/User.vue';
import Sigin from '../components/Navigation/Sigin.vue'
import Gift from '../components/Navigation/Gift.vue'
import Bargaining from '../components/Navigation/Bargaining.vue';
import Column from '../components/Navigation/Column.vue';
import Classifytwo from '../components/nav/Classifytwo.vue';
import BarginList from '../components/HaggleList/BarginList.vue';
import ColumnList from '../components/HaggleList/ColumnList.vue';
import Classlist from '../components/HaggleList/Classlist.vue';
import ListList from '../components/HaggleList/ListList.vue';
import Login from '../components/HaggleList/Login.vue';
import Register from '../components/HaggleList/Register.vue';
import Confirmation from '../components/HaggleList/Confirmation.vue';
import Address from '../components/HaggleList/Address.vue';
import Newaddress from '../components/HaggleList/Newaddress.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'Home',
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/',
          redirect:'Jump'
        },
        {
          path:'jump',
          name:'Jump',
          component:Jump,
        },
        {
          path:'classify',
          name:'Classify',
          component:Classify,
          children:[
            {
              path: '/',
              redirect:'classifytwo',
            },
            {
              path:'classifytwo',
              name:'Classifytwo',
              component:Classifytwo,
            }
          ]
        },
        {
          path:'cart',
          name:'Cart',
          component:Cart,
        },
        {
          path:'User',
          name:'User',
          component:User,
        },
      ]
    },
    {
      path:'/sigin',
      name:'Sigin',
      component:Sigin,
    },
    {
      path:'/gift',
      name:'Gift',
      component:Gift,
    },
    {
      path:'/bargaining',
      name:'Bargaining',
      component:Bargaining,
    },
    {
      path:'/column',
      name:'Column',
      component:Column,
    },
    {
      path:'/barginlist',
      name:'BarginList',
      component:BarginList,
    },
    {
      path:'/columnList',
      name:'ColumnList',
      component:ColumnList,
    },
    {
      path:'/classlist',
      name:'Classlist',
      component:Classlist,
    },
    {
      path:'/listList',
      name:'ListList',
      component:ListList,
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path:'/register',
      name:'Register',
      component:Register,
    },
    {
      path:'/confirmation',
      name:'Register',
      component:Confirmation,
    },
    {
      path:'/address',
      name:'Address',
      component:Address,
    },
    {
      path:'/newaddress',
      name:'Newaddress',
      component:Newaddress,
    },
  ]
})
