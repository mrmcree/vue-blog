<template>
  <div class="login">
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="用户名"
        prop="username"
        :rules="[
      { required: true, message: '用户名不能为空'}
    ]"
      >
        <el-input type="username" v-model.number="numberValidateForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
      { required: true, message: '密码不能为空'}
    ]"
      >
        <el-input type="password" v-model.number="numberValidateForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import {Message} from 'element-ui'
  export default {
    created:function(){
      var cookie=this.getCookie('userdata')
      if(cookie){
       this.$router.push('/admin')
      }
    },
    data() {
      return {
        numberValidateForm: {
          password: '',
          username:''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login:function () {
        $.ajax({
          url:this.$host+'/api/login.php',
          dataType:'json',
          type:'post',
          data:{
            username:this.numberValidateForm.username,
            password:this.numberValidateForm.password
          }
        }).done(res=>{
          console.log(res)
          if(res.code===0){
            Message({
              message: res.msg,
              type: 'success'
            });
            this.setCookie('userdata',JSON.stringify({username:this.numberValidateForm.username,password:this.numberValidateForm.password}),3)
            this.$router.push('/admin')
          }else{
            Message({
              message:res.msg,
              type: 'error'
            });
          }
        })
      },
      setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        //console.info(cname + "=" + cvalue + "; " + expires);
        document.cookie = cname + "=" + cvalue + "; " + expires;
        //console.info(document.cookie);
      },
      //获取cookie
      getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
      },
    },
    name: 'login'

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.login
  width 100vw
  height 100vh
  overflow hidden
  background #333
  display flex
  justify-content center
  align-items center
  text-align center
</style>
