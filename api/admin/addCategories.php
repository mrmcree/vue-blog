<?php
header("Access-Control-Allow-Origin: *");
require '../Model.class.php';
require '../config.php';
$categoriesName=$_GET['category'];
$categories=new Model('blog_category');
$data['name']=$categoriesName;
$res=$categories->add($data);
if($res>0){
  echo json_encode(array('code'=>0,'msg'=>'添加成功!'));
 }else{
  echo json_encode(array('code'=>1,'msg'=>'添加失败!'));
 }


?>
