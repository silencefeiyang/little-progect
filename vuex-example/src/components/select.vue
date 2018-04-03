<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
    {title:'javaScript'},
    {title:'html'},
    {title:'css'},
    {title:'nodeJS'},
    {title:'react'}
]
export default {
  data(){
      return {
        listShow: false
      }
  },
  methods: {
    
  },
  components: {
    selectInput,
    list
  }
}
</script>