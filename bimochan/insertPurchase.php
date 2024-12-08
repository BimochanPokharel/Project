<?php
try{
    $vendor=$_POST['vendor'];
    $date=date("yy/m/d");
    include "connectdb.php";
    $q="INSERT INTO`purchase` (`date`,`vendor`)VALUES ('$date','$vendor')";
    $result=mysqli_query($con,$q);
    $id=mysqli_insert_id($con);
    echo $id;

}
catch (Exception $ex)
{
    echo $ex->getMessage();
}



?>