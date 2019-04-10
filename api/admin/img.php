
<?php
header("Access-Control-Allow-Origin: *");
require "../Upload.class.php";
//var_dump($_FILES);

$upload = new Upload();// 实例化上传类
$upload->rootPath  =  './static/upload/'; // 设置附件上传根目录
$upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');

// 上传文件
$info   =  $upload->upload();


//var_dump($info);
if ($info) {
	echo './static/upload/'.$info['image']['savepath'].$info['image']['savename'];
} else {
	echo $info;
}
