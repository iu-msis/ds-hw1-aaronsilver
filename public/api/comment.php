
<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}
$id = intval($_GET['id'] ?? 0);


$comments = Comments::findAll();
// 1. Go to the database and get all work associated with the $taskId
$commentArr = Comments::getCommentById($id);
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
