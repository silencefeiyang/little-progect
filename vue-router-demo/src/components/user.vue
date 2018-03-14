<template>
 <div>
     我是user
     <div class="user-list">
         <router-link :to="{path:'/user/'+item.type+'/'+item.id,query:{info:'follow'} }" :key="index" v-for="(item,index) in userList" style="padding:0 20px">{{item.userName}}</router-link>
     </div>
     <div class="user-info"  v-if="userInfo.userName" style="font-size:18px">
         <p>姓名{{userInfo.userName}}</p>
         <p>性别{{userInfo.sex}}</p>
         <p>爱好{{userInfo.hobby}}</p>
     </div>
     <hr>
     <div class="info-list" style="font-size:16px" v-if="userInfo.userName">
         <router-link :to="{path:'',query:{info:'follow'}}" exact>他的关注</router-link>    <!--path:''代表匹配当前路径-->
         <router-link :to="{path:'',query:{info:'share'}}" exact>他的分享</router-link>     <!--query查询字符串，接受一个对象，对象里面可以传多个-->
     </div>
     <div>
         {{$route.query}}
     </div>
 </div>
</template>

<script>
let data = [
        {
            id:1,
            userName:"leo1",
            type:'vip',
            sex:'男',
            hobby:'写代码'
        },
        {
            id:2,
            userName:"leo2",
            type:'vip',
            sex:'男',
            hobby:'唱歌'
        },
        {
            id:3,
            userName:"leo3",
            type:'common',
            sex:'男',
            hobby:'读书'
        }
    ]
 export default {
   data(){
       return {
           userList:data,
           userInfo:{},
       }
   },
   methods:{
       getData(){
            let id = this.$route.params.userId;
            if(id){
                this.userInfo = this.userList.filter((item)=>{
                        return item.id==id
                    })[0]
            }else{
                this.userInfo = {}
            } 
       }
   },
   watch:{
       $route(){    //路由发生变化，$route会重新赋值，监控这个值，当值发生变化时调用这个函数
              this.getData()   //监听路由对象的变化，变化之后就触发函数
       }
   },
   created(){           //这个函数只在组件被创建时调用 所以当路由发生变化时，并不会再触发这个函数，为了动态获取路由对象的信息，所以要监控路由对象
       //渲染这个组件会调用一次这个生命周期函数
       //复用这个组件不会再调用这个函数
       this.getData()
   },
   components: {

   }
 }
</script>

<style>

 
</style>
