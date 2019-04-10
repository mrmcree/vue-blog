<template>
  <div id="app">
      <router-view class="view" ref='view'></router-view>
  </div>

</template>

<script>


export default {

  name: 'app',
  mounted(){
    // window.addEventListener('scroll',this.handleScroll)
  },
  data(){
     return {
      transitionName: 'slide-left'
    }
  },
  methods:{

  }

}
</script>

<style lang='stylus'>
@import './common/stylus/icon.styl'
@import './rider/setting.styl'
@import './rider/normalize.styl'
@import './rider/shape.styl'
@import './rider/clockhand.styl'
@import './rider/breakpoint.styl'
normalize()
@keyframes showup
    0%{
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }
    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

.showup
    animation: showup 0.4s forwards ease-out;

body
  min-height 100vh
  overflow-x hidden
  overflow-y auto
  font-family "Gotham-Medium"
  +below(3)
    font-size:14px;
a
  cursor pointer
  text-decoration: none;
  text-decoration-color:none;
  color:#000;
  position relative
  &:after
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    background: #000;
    height: 2px;
    display: block;
    width: 100%;
    opacity: 0;
    transform: scaleX(0);
    transition: all .2s cubic-bezier(0.18, 0.89, 0.17, 0.88), opacity .15s ease;
ul,ol
  list-style none
h1
  margin 0
#app
  min-height 100vh
  width 100vw
  margin 0 auto
  +below(3)
    width 100vw
</style>
