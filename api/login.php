<?php
header("Access-Control-Allow-Origin: *");
require 'Model.class.php';
require 'config.php';
$empModel = new Model("blog_user");
$res=$empModel->select();
//var_dump($_POST);
//var_dump($res);
if($_POST['username']==$res[0]['name'] && $_POST['password']==$res[0]['password']){

   echo json_encode(array('code'=>0,'msg'=>'登录成功!'));
}else{
   echo json_encode(array('code'=>1,'msg'=>'登录失败!'));
}


?>
