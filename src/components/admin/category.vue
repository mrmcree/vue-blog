<template>
  <div class="category">
    <h1>category</h1>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button_new_tag" size="small" @click="showInput">+ New Tag</el-button>
  </div>

</template>

<script>
  import {Message} from 'element-ui'
  export default {
    name: 'category',
    methods: {
      handleClose(tag) {
        let id=null
        for(let i of this.tag){
          if(i.name===tag){
            id=i.id
          }
        }
        $.ajax({
          url:this.$host+'/api/admin/categories.php?type=delete&id='+id,
          dataType:'json'
        }).then(res=>{
          if(res.code===0){
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            Message({
              type: 'success',
              message: '删除成功!'
            });
          }else{
            Message({
              type: 'warning',
              message: '删除失败!'
            });
          }

        })

      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          $.ajax({
            url:this.$host+'/api/admin/addCategories.php?category='+inputValue,
            dataType:'json'
          }).then(res=>{
            if(res.code===0){
              this.$message({
                type: 'success',
                message: inputValue+'添加成功'
              });
              this.dynamicTags.push(inputValue);
            }else{
              this.$message({
                type: 'warning',
                message: inputValue+'添加失败'
              });
            }

          })

        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    data(){
      return{
        dynamicTags:[],
        inputVisible: false,
        inputValue: '',
        tag:[]
      }
    },
    created(){
      $.ajax({
        url:this.$host+'/api/admin/categories.php',
        dataType:'json'
      }).then(res=>{
        this.tag=res
        for(let i of res){
          this.dynamicTags.push(i.name)
        }

      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  h1
    margin 20px auto
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
