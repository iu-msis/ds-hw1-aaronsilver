<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}
$taskId = intval($_GET['id'] ?? 0);
if ($id < 1) {
  throw new Exception('Invalid ID');
}
// 1. Go to the database and get all work associated with the $id
$commentArr = Comment::getCommentById($id);
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
