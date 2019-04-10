<template>
  <div class="footbar">
    <sub>POWER BY NICO</sub>
  </div>
    
</template>

<script>
export default {
  name: 'footbar',
  methods: {
      
    },
     beforeMount() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '../../rider/breakpoint.styl'
  .footbar
    max-height 80px;
    line-height @max-height
    position: relative;
    height: 80px;
    line-height: 80px;
    position absolute
    width 100%
    margin 0 auto
    font-size: 16px;
    text-align: center;
</style>
