<template >
  <div class="headbar showup">
    <div class="navigator">
      <div class="logo"></div>
      <div class="item"><router-link to='/home/archive'>ARCHIVE</router-link></div>
      <div class="item"><router-link to='/home/categories'>CATEGORIES</router-link></div>
      <div class="item"><router-link to='/home/timeline'>TIMELINE</router-link></div>
      <div class="item"><router-link to='/home/ABOUT'>ABOUT</router-link></div>
    </div>
    <div class="nav2">
      <div class="left"  @click="$refs.slide.style.display='block'"><i class="iconfont icon-menu"></i></div>
    </div>
     
      <div class="slide" ref='slide'>
           <ul>
              <li @click="$refs.slide.style.display='none'"><i class="iconfont icon-X"></i></li>
     
         
          <li :key='item' v-for="item in ['ARCHIVE','CATEGORIES','TIMELINE','ABOUT']" @click="$refs.slide.style.display='none'">
            <router-link :to="'/home/'+item">{{item}}</router-link>
            </li>
   
        
       
        </ul>
      </div>
   
  </div>

</template>

<script>
export default {
  name: 'headbar',
  data () {
    return {
      
    }
  },
  methods: {

    },
     watch: {
    '$route' (to, from) {
      $('.item a').each(function(i,v){
        if(v.innerHTML==to.path.replace('/','')){

        //  console.log($(this))
        }
      })
    }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import 'http://at.alicdn.com/t/font_517348_hx7jwo12mwh4cxr.css'

@import '../../rider/clockhand.styl'
@import '../../rider/image.styl'
@import '../../rider/unit.styl'
@import '../../rider/breakpoint.styl'

.headbar
  height rem(150px);
  font-size: rem(18px);
  line-height: rem(18px);
  display flex
  justify-content center
  align-items center
  text-align center
  +below(3)
    height rem(70px)
    position absolute
    z-index 2
    width 100%
  .nav2
    width 90%
    margin 0 auto
    display none
    +below(3)
      display block
    .left
      float right 
  .slide
    display none
    position absolute
    z-index 1111
    top:0
    width 100%
    text-align center
    ul
      margin 0
      padding 0
      background #f3f3f3
      li
        border-bottom 1px solid #fff
        padding 10px 0
  a
    &:hover:after
      transform scaleX(1)
      opacity: 1
  .navigator
    display flex
    justify-content space-around
    width 100%
    +below(3)
      display none
    .item
      flex:1
</style>
