<?php 
    $host = "localhost";
    $user = "jmjm19";
    $pass = "marusama0!";
    $db = "jmjm19";
    $connect = new mysqli($host, $user, $pass, $db);
    $connect -> set_charset("utf8");

    if( mysqli_connect_errno() ){
        echo "Database Connect False";
    } else {
        //echo "Database Connect True";
    }
?>