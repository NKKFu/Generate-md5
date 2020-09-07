<?php
    #using php md5
    $string = $_GET['md5'];
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
       <meta charset="utf-8">
       <title>Generate md5 with php</title>
    </head>
    <body>
        <h2> Your md5 is: <?php echo md5($string); ?></h2>
    </body>
<html>