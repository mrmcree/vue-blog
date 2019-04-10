<template>
<div class='timeline'>
  <div class='timeline-title'>good </div>
  <div class='timeline-year'>2017 </div>
  <article class="timeline-wrap" v-for='itme in post'>
    
     
    <div class="timeline-list">
      <router-link :to="{name:'detail',params:{id:itme.id}}" >
         <small>{{itme.time | read}}</small> {{itme.title}}
      </router-link>
     
      </div>
  </article>
  <footbar></footbar>
</div>
   
</template>

<script>
import footbar from '../footbar/footbar.vue'
export default {
  name: 'timeline',
   beforeMount() {
    this.$http.get(this.$host+"/api/post.php").then(
      response => {
        this.post = response.data;
      //  console.log(this.post[0]['content'])
      },   response => {
        // error callback
      }
    );

  },
  data () {
    return{
      post:[]
    }
  },
  filters:{
    read:function(value){
      return `${new Date(value).getMonth()+1}-${new Date(value).getDate()} `
    }
  },
  methods: {
      
    },
     components:{
    footbar:footbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.timeline
  .timeline-year
    margin 30px 0
    padding 0 40px
    position relative
    font-size 24px
    &:after
      content: " ";
      position: absolute;
      left: 0;
      top: 5px;
      width: 6px;
      height: 6px;
      margin-left: -4px;
      background: #bbb;
      border-radius: 50%;
      border: 1px solid #fff;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      transition-property: background;
  .timeline-wrap
    div
      margin 30px 0
      padding 0 40px
      position relative
      &:after
        content: " ";
        position: absolute;
        left: 0;
        top: 5px;
        width: 6px;
        height: 6px;
        margin-left: -4px;
        background: #bbb;
        border-radius: 50%;
        border: 1px solid #fff;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
        transition-property: background;
    .timeline-list
      font-size 16px
      color #333
      padding 5px 40px
      border-bottom: 1px dashed #ccc;
      small
        font-size 12px
  .timeline-title
    margin 30px 0
    padding 0 40px
    opacity: 1;
    display: block;
    transform: translateY(0px);
    &:after
      content: " ";
      position: absolute;
      left: 0;
      top: 5px;
      width: 6px;
      height: 6px;
      margin-left: -4px;
      background: #bbb;
      border-radius: 50%;
      border: 1px solid #fff;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      transition-property: background;
  &:after
    content: " ";
    position: absolute;
    top: 20px;
    left: 0;
    margin-left: -2px;
    width: 4px;
    height: 100%;
    background: #f5f5f5;
    z-index: -1;
  
</style>
