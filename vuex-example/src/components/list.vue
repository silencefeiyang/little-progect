<template>
    <ul class="list">
      <li v-for="item in list" :key="item.id" @click="selectItem({title:item.title})">{{item.title}}</li>
    </ul>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
//  computed:{
//      listData () {
//          return this.$store.state.list      //  1. 取值vuex中的list
//      }
//  },
computed:{
    ...mapState(['list'])               // 取值的两种写法
},
 methods:{
     ...mapMutations({      // 改变vuex中的状态
         selectItem:'changeTitle'      // 对象的key为点击触发的函数，传参在点击时的函数传， value为vuex中处理函数的名字
     })
 },
 created () {
     this.$store.dispatch('getListAction')
 }
}
</script>
