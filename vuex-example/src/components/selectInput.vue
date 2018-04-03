<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        :value="title"
        @click="showListHandler"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
    props:['isShow'],
    computed:{
        initShow(){
            return this.isShow
        },
        initTitle(){
            return this.title
        },
        title(){
            return this.$store.state.title
        }
    },
    methods:{
        showListHandler(){
            this.$emit('update:isShow',!this.initShow)
        }
    }
}
</script>