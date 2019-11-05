<template>
    <ul class="Footer">
          <router-link tag="li" to="/home">
              <i class="el-icon-s-home"></i>
              <p>首页</p>
          </router-link>
          <router-link tag="li" to="/home/classify">
              <i class="el-icon-notebook-2"></i>
              <p>分类</p>
          </router-link>
          <router-link tag="li" to="/home/cart">
              <i class="el-icon-shopping-cart-2"></i>
              <p>购物车</p>
          </router-link>
          <router-link tag="li" to="/home/user">
              <i class="el-icon-user"></i>
              <p>个人</p>
          </router-link>
    </ul>
</template>

<script>
export default {
    name:'Footer',
    
}
</script>

<style lang='scss'>
.Footer{
  width: 7.5rem;;
  height: 1rem;
  background: #fff;
  list-style: none;
  display: flex;
  justify-content: space-around;
  li{
    width: 25%;
    text-align: center;
    i{
      font-size: 0.5rem;
      margin: 0.1rem auto;
    }
    p{
    }
  }
}
</style>