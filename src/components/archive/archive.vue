<template>
  <div class="archive">
    <div class="wrap" v-for="(item,index) in postdata" :key="index">
      <div class="post-img">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :height="imgheight" :width="imgwidth" :src="item.imgUrl">
        </router-link>
      </div>
      <div class="post-title">{{item.title}}</div>
      <div class="post-ctx">
        <div class="post-time">Published on {{item.time}}</div>

        <div class="post-line"></div>
        <blockquote class="post-subtitle">{{item.subtitle}}</blockquote>
        <div class="post-detail"></div>
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <div class="post-more">Read More</div>
        </router-link>
      </div>
    </div>
    <div class="foot" v-show="post.length>1">
      <div class="next_btn" @click="nextpage-=5,currentpage-=5">prev</div>
      <div class="pageinfo">
        <span>{{nextpage}}/</span>
        {{post.length}}
      </div>
      <div class="prev_btn" @click="nextpage+=5;currentpage+=5">next</div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import imgs from "../imgs/imgs.vue";
import footbar from "../footbar/footbar.vue";

export default {
  name: "archive",
  beforeMount() {
   this.$http.get(this.$host+'api/post.php').then(
      response => {
        this.post = response.data;
        let category=this.$route.params.category
        if(category){
          this.post=[]
          for(let i of response.data){
            if(i.category===category){
              this.post.push(i)
            }
          }
        }
      //  console.log(this.post[0]['content'])
      },   response => {
        // error callback
      }
    );
  },
  data() {
    return {
      post: [],
      currentpage: 0,
      nextpage: 5,
      pageNum: 5,
      imgheight: "300px",
      imgwidth: "100%"
    };
  },
  watch: {
    nextpage: function(oldValue, newValue) {
      this.nextpage = Math.max(
        Math.min(this.post.length, this.nextpage),
        this.pageNum
      );
    },
    currentpage: function(oldValue, newValue) {
      this.currentpage = Math.min(
        Math.max(0, this.currentpage),
        this.post.length - this.pageNum
      );
    }
  },
  methods: {},
  computed: {
    postdata: function() {
      console.log(this.$route)
      return this.post.slice(this.currentpage, this.nextpage);
    }
  },
  components: {
    imgs: imgs,
    footbar: footbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '../../rider/breakpoint.styl';
@import '../../rider/clockhand.styl';
@import '../../rider/unit.styl';
@import '../../rider/breakpoint.styl';
@import '../../rider/typography.styl';

.archive {
  margin: 0 auto;
  text-align: center;

  .wrap {
    position: relative;
    margin: 30px 0;
  }

  .foot {
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: center;

    div {
      flex: 1;
    }
  }

  .post-ctx {
    padding: 10px 0;
    text-align: center;
  }

  .post-time {
    font-weight: 200;
    color: #b7b3b3;
    font-size: 14px;
  }

  .post-more {
    display: block;
    padding: 8px 15px;
    color: #5f5f5f;
    margin: 0 auto;
    width: 80px;
    position: relative;
    font-family: 'yisu';

    &:after {
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
      transition: all 0.2s cubic-bezier(0.18, 0.89, 0.17, 0.88), opacity 0.15s ease;
    }

    &:hover:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  .post-line {
    width: 50px;
    height: 3px;
    background: #666;
    margin: 20px auto;
  }

  .post-title {
    margin-top: 20px;
    font-size: 24px;
  }

  .post-subtitle {
    ellipsis();
    padding: 0px 30px;
    font-size: 14px;
    font-weight: 200;
    color: #313131;
  }

  .post-img {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;

    a {
      width: 100%;
    }

    &:hover {
      color: red;
    }

    img {
      width: 100%;
      max-height: 300px;

      +below(3) {
        max-height: 200px;
      }
    }
  }
}
</style>
