<template>
  <div class="detail">
    <div class="wrap" v-for='(item,index) in detail' :key='index'>
      <h1 align="center">{{item.title}}</h1>
      <h5 align="center">{{item.subtitle}}</h5>
      <!-- <div class="category" align="center">{{item.category}}</div> -->
      <!-- <div v-html="md.render(item.desc)"></div> -->
    </div>
    <footbar ></footbar>
  </div>

</template>

<script>
import footbar from '../footbar/footbar.vue'
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
export default {
  name: 'detail',
  data(){
    return{
     id:'',
     detail:[],
      md:md
    }
  },
  methods: {

    },
   created: function() {
     this.id=this.$route.params.id
      this.$http.get(this.$host+'api/post.php?id='+this.id).then(response => {
      // this.detail=response.data.data.filter(item=>item.id==this.id)
       this.detail = response.data; 

    }, response => {
        // error callback
    })
 },
   components:{
    footbar:footbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
.detail
  .category
    position relative
    width 100px
    margin 0 auto
    padding 10px 0
    border-bottom 2px solid #333
  img
    width 100%
    display block
    margin 0 auto
    animation: showclip 0.8s forwards cubic-bezier(0.54, 0.04, 0, 1.03);

@keyframes showclip
    0%{
        clip: rect(0,0,2000px,0);
    }
    100%{
        clip: rect(0,3260px,2000px,0);
}
</style>
