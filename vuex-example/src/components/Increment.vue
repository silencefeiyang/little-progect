<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="delNum({num:3})"/>
      <!-- <span>{{num}}</span> -->
      <span>{{count}}</span>
      <input type="button" value="+" @click="addNum"/>
      <p>{{filrerCount}}</p>
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
      //  computed: mapState({
      //   //  num: state => state.count   //取值方式一
      //   num: 'count'      // 取值方式二
      //  })
      computed:{
        ...mapState(['count']),      //取state里面的值  对mapState进行解构赋值    取值的另外一种方式
        ...mapGetters(['filrerCount'])  //取getters里面的值 
      }
       ,
       methods:{
         
         //异步提交mutation
        //  addNum(){      // 使用commit方法提交mutations           方式一
        //   //  this.$store.commit('addCount',{num:5})
        //   this.$store.dispatch('addAction')
        //  },
        ...mapActions({         //进行解构赋值   此函数接受一个对象参数，对象的属性为点击事件要触发的函数       方式二
          addNum:'addAction'               // 这个对象对应的值为vuex中要触发的函数
        }),

        // 提交mutation
        //  delNum(){
        //    this.$store.commit({type:'delCount',num:3})
        //  },
         ...mapMutations({
          delNum:'delCount'         
        })
       }
    }
</script>
<style>

</style>
