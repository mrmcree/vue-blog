<template>
  <div class="manage">
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      max-height="100%"
      style="width: 100%;overflow: hidden"
      >
      <el-table-column
        label="id"
        width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="标题"
        width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        sortable
        prop="amount1"
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="内容"
        width="600">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>内容: {{ scope.row.content }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.content }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="100" :filters=filtersData  :filter-method="filterTag" filter-placement="bottom-end" >
        <template slot-scope="scope">
          <el-tag :type="scope.row.category === scope.row.category ? 'primary' : 'success'" close-transition>{{scope.row.category}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import {MessageBox  } from 'element-ui';
  export default {
    created: function() {
     this.getData()
    },
    data() {
      return {
        tableData:[],
        data:[]
      };
    },
    computed:{
      filtersData:function () {
       return this.data
      }

    },
    methods: {
      getData(){
        this.$http.get(this.$host+'/api/post.php').then(response => {
          this.tableData=response.data
        }, response => {
          // error callback
        })

        let data=[]
        let obj
        this.$http.get(this.$host+'/api/admin/categories.php').then(response => {
          for(var i=0;i<response.data.length;i++){
            obj={}
            obj['text']=response.data[i]['name']
            obj['value']=response.data[i]['name']
            data.push(obj)
          }
          this.data=data

        }, response => {
          // error callback
        })
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      },
      filterTag(value, row) {
        return row.category === value;
      },
      handleEdit(index, row) {

        this.$router.push({name:'add',params:{type:'edit',data:row}})
      },
      handleDelete(index, row) {
        MessageBox.confirm(`是否删除文章@${row.title}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data= {
            id: row.id
          }
          $.ajax({
            url:this.$host+'/api/admin/delectpost.php',
            type:'post',
            data:data,
            dataType:'json'
          }).done(res=>{
            if(res.code===0){
              MessageBox({
                type: 'success',
                message: '删除成功!'
              });
              this.getData()
            }else {
              MessageBox({
                type: 'waring',
                message: '删除失败!'
              });
            }
          })

        }).catch(() => {
          MessageBox({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    name: 'manage',


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
  .manage
    .el-table__body-wrapper
      overflow hidden
</style>
