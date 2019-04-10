<?php
header("Access-Control-Allow-Origin: *");
require '../Model.class.php';
require '../config.php';
$categories=new Model('blog_category');

if($_GET){
if($_GET['type']=='delete'){
  $info =$categories->delete($_GET['id']);
 if($info>0){
   $result['code']=0;
   $result['msg']='删除成功';
  }else{
    $result['code']=1;
    $result['msg']='删除失败';
  }
  echo json_encode($result);
}
}else{
$result=$categories->select();
echo json_encode($result);

}

?>
