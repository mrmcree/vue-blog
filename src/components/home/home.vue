<template>
  <div class="home">
    <headbar></headbar>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>

</template>

<script>
  import headbar from '@/components/headbar/headbar.vue'
export default {
  name: 'home',
  methods: {

    },
  data(){
    return {
      transitionName:'slide-left'
    }
  },
  components:{
    headbar:headbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  @import '../../rider/breakpoint.styl'
  .child-view
    position: absolute;
    left: 0;
    width: 80vw;
    height: 100%;
    right :0;
    z-index 1
    margin auto
    transition: all .5s cubic-bezier(.55,0,.1,1);
    +below(3)
      width 90vw
      top 4rem
  .slide-left-enter, .slide-right-leave-active
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);

  .slide-left-leave-active, .slide-right-enter
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);

</style>
