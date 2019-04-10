<template>
  <div class='imgs' ref='parent' >
    <!-- <img v-lazy='imgurl' alt="" ref="imgel" > -->
    <div class="imgel" v-bind:style="styleObj"  v-lazy:background-image="imgurl" > </div>
  </div>

</template>

<script>
export default {
  name: 'imgs',
  mounted:function(){
    //   var origin= {
    //         X: document.body.clientWidth / 2,
    //         Y: document.body.clientHeight / 2
    //     }
    //   var o = document.querySelector('.imgel');
    // document.querySelector('.imgs').onmouseover=function(){
    //     document.querySelector('.imgs').addEventListener('mousemove', function (e) {
    //         var rotate = {x: 1 - e.pageY / origin.Y, y: e.pageX / origin.X - 1};
    //         var transform = "rotateX(" + rotate.x *30 + "deg) rotateY(" + rotate.y * 30 + "deg)";  //变换效果
    //         o.style.transform = transform;
    //         o.style.boxShadow = -parseInt(rotate.y * 30) + 'px '+ parseInt(rotate.x * 20+20)+ 'px ' + '50px #333';  //边框阴影效果
    //     });
    // };
    // document.querySelector('.imgs').onmouseout=function(){
    //     o.style.transform ="rotateX(0deg) rotateY(0deg)";
    //     o.style.boxShadow ='0px 0px';
    // }
  },
  props:{
      height:String,
      width:String,
      src:String
  }
  ,
  data () {
    return{
        styleObj:{
          height:this.height,
          width:this.width
        },
        imgurl:this.src,
        origin: {
            X: document.body.clientWidth / 2,
            Y: document.body.clientHeight / 2
        }
    }
  },
  methods: {
      getpos:function(e){
        var offsetX = e.clientX -  this.$refs.imgel.clientLeft;
        var offsetY = e.clientY -  this.$refs.imgel.clientTop;
        return [offsetX, offsetY]
      }
      
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.imgs
    perspective: 2000px;
    height 300px;
    border-radius 30px
    position relative
    transition all 1.1s cubic-bezier(.19, 1, .22, 1)
    filter grayscale(1)
    position relative
    &:hover
        filter grayscale(0)
        transform scale(1.3)

    .imgel
      border-radius 30px
      position:absolute;
      transform-origin: 50% 50% 0;
      top:0;
      background-size cover
      background-position center
.imgel[lazy = loaded]
   animation: showclip 0.8s forwards cubic-bezier(0.54, 0.04, 0, 1.03);
@keyframes showclip
    0%{
        clip: rect(0,0,2000px,0);
    }
    100%{
        clip: rect(0,3260px,2000px,0);
}
</style>
