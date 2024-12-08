<?php
try{
    $vendor_id=$_POST['vendor_id'];
    $itemid=$_POST['id'];
    $itemname=$_POST['itemName'];
    $price=$_POST['price'];
    $quantity=$_POST['quantity'];
    



    include"connectdb.php";
    $q="INSERT INTO `bill`(`vendor_id`,`item_id`,`itemname`,`quantity`,`price`)VALUES($vendor_id,$itemid,'$itemname','$quantity',$price)";
    $result=mysqli_query($con,$q);



    $q="UPDATE `receive form data` SET `quantity`=quantity+$quantity WHERE id=$itemid";
    $result=mysqli_query($con,$q);
    
    echo "data inserted successfully";
}
catch(Exception $ex)
{
    echo $ex->getMessage();
}


?>