<template >
  <div class='categories'>
    <h4>category</h4>
    <div class="wrap" v-for="(item,index) in post" :key="index">
      <div @click="jump(item.name)">
          <el-tag type="info">{{item.name}}</el-tag>
      </div>
    
    </div>

    <footbar></footbar>
  </div>

</template>

<script>
import footbar from '../footbar/footbar.vue'
 import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'categories',
    beforeMount() {
     this.$http.get(this.$host+"/api/admin/categories.php").then(
       response => {
         this.post = response.data;
        //  console.log(this.post)
       },
       response => {
         // error callback
       }
     );
  },
  data () {
    return {
      post:[]
    }

  },
  methods: {
    jump(item){
      this.changeCate(item)
      this.$router.push({
        path:'/home/archive'
      })
      
    },
    ...mapMutations({
      changeCate:'CHANGE_CATE'
    }),
    
    
  },
  computed:{
    ...mapGetters([
      'categories'
    ])
    },
 components:{
    footbar:footbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.categories
  .wrap
    display inline-block
    margin 10px
</style>
