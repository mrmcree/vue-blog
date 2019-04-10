<template>
  <div class="edit">
    <h2>编辑文章</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="postFrom" size="small">
      <el-form-item label="标题" >
        <el-input v-model="postFrom.title"></el-input>
      </el-form-item>
      <el-form-item label="副标题">
        <el-input v-model="postFrom.subtitle"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="postFrom.category" placeholder="请选择分类">
          <div class="wrap"  v-for="(value,key,index) in category">
            <el-option :label=value.name :value=value.name ></el-option>
          </div>
          <el-button type="text" @click="open6" class="buttons">添加分类</el-button>
        </el-select>
      </el-form-item>
      <mavon-editor :ishljs="true" ref=md  @imgAdd="$imgAdd" :subfield="false" @change="mdChange"></mavon-editor>
      <el-button  type="info"  @click="submitPost" style="margin: 30px 0;">发布</el-button>
    </el-form>


  </div>

</template>

<script>
  import { Message } from 'element-ui';
  export default {
    created:function (){
      this.$http.get(this.$host+'/api/admin/categories.php').then(res=>{
        this.category=res.data
//        console.log(this.category)
      })
    },
    data() {
      return {
        labelPosition: 'right',
        postFrom: {
          title: '',
          subtitle: '',
          category:'',
          ctx:''

        },
        category:[]
      }
    },
    name: 'edit',
    methods: {
      // 绑定@imgAdd event
      $imgAdd(pos, $file) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('image', $file);
        this.$http({
          url:this.$host+'/api/admin/img.php',
          method: 'post',
          data: formdata,
          headers: {'Content-Type': 'multipart/form-data'},
        }).then((url) => {
          // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          //console.log(url.data)
          this.$refs.md.$img2Url(pos, url.data);//将md源码中图片文件名替换为url
        })
      },
      mdChange(v){
        this.postFrom.ctx=v
      },
      submitPost(v){
        let data= {
          title: this.postFrom.title,
          subtitle:this.postFrom.subtitle,
          ctx:this.postFrom.ctx,
          category:this.postFrom.category
        }
        $.ajax({
          url:this.$host+'/api/admin/addpost.php',
          data:data,
          type:'post',
        }).done(function (res) {
          var res=JSON.parse(res)
          if(res.code===0){
            Message({
              message: res.msg,
              type: 'success'
            });
          }else{
            Message({
              message:res.msg,
              type: 'error'
            });
          }
        })
      },
      open6() {
        this.$prompt('请输入分类', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$http.get(this.$host+'/api/admin/addCategories.php?category='+value).then(res=>{
            this.$message({
              type: 'success',
              message: value+'添加成功'
            });
            this.$http.get(this.$host+'/api/admin/categories.php').then(res=>{
              this.category=res.data
            })
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    },

  }
</script>

<!-- edit "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .el-input
    width 300px;
  .v-note-op
    box-shadow none
    border 1px solid #333
  .buttons
    width 100%
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    &:hover
      color blue

</style>
