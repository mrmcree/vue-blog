<?php
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//header('Access-Control-Allow-Methods: POST,OPTIONS');
require '../Model.class.php';
require '../config.php';

$postId=$_POST['id'];
//var_dump($_POST);
$postModel=new Model('blog_post');
//var_dump($_POST)
$res=$postModel->delete($postId);

if($res>0){
  $result['code']=0;
  $result['msg']='文章删除成功';
 }else{
 $result['code']=1;
   $result['msg']='文章删除失败';
 }

 echo json_encode($result)
?>
