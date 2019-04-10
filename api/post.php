<?php
header("Access-Control-Allow-Origin: *");
require 'Model.class.php';
require 'config.php';
$empModel = new Model("blog_post");
if ($_GET) {
   if($_GET['id']){
    $where = "id={$_GET['id']}";
   }else if($_GET['tags']){
    $where = "tags={$_GET['tags']}";
   }
   
    
    $result = $empModel->where($where)->select();
    

}else{
    $result=$empModel->order('time desc')->select();
}

echo json_encode($result);
// $mysql=new MySQli(HOST,USER,PASS,DBNAME);
// $mysql->set_charset('utf8');
// $res=$mysql->query('select * from blog_post');
// $res -> fetch_assoc();
// var_dump($res);

?>