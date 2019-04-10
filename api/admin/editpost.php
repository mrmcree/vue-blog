<?php
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//header('Access-Control-Allow-Methods: POST,OPTIONS');
require '../Model.class.php';
require '../config.php';
$data['id']=$_POST['id'];
$data['title']=$_POST['title'];
$data['content']=$_POST['ctx'];
$data['category']=$_POST['category'];
$postModel=new Model('blog_post');
//var_dump($_POST)
$res=$postModel->save($data);

if($res>0){
  $result['code']=0;
  $result['msg']='文章修改成功';
 }else{
 $result['code']=1;
   $result['msg']='文章修改失败';
 }

 echo json_encode($result)
?>
