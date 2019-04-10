<template >
  <div class="slidebar">
    <ul>  
      <li><img  alt="" class='avatar'></li>
      <li><router-link to='archives '>archives</router-link></li>
      <li><router-link to='categories'>categories</router-link></li>
      <li><router-link to='tags'>tags</router-link></li>
      <li><router-link to='about'>about</router-link></li>
    </ul>
  </div>
    
</template>

<script>
export default {
  name: 'slidebar',
  data () {
    return {}
  },
  methods: {
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '../../rider/clockhand.styl'
.slidebar
  min-width 200px;
  min-height 100vh
  overflow hidden
  fixed 0 _ _ _
  background #fff
  display block
  ul
    width 100%
    li
      width 200px
      .avatar
        border-radius 50%
        width 200px
        height @width
        display block
        background #ccc
        width:100%
</style>
