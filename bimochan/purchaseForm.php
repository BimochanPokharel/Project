<?php
include("menu.php");
include("connectdb.php");
$q="select `ID`,`Item Name`,`Item Price` from `receive form data`";
$result=mysqli_query($con,$q);

?>
<div class="form1">
    <div class="title">Purchase Items</div>
    <div class='content'>
    <form id='pdata' action="insertitem.php" method="post" enctype="multipart/form-data">
        <label>ItemName </label>
        <select name="item">
            <?php
            while($row=mysqli_fetch_array($result,MYSQLI_NUM)){
                echo "<option price=".$row[2]." myid=".$row[0].">";
                echo "$row[1]";
                echo "</option>";
            }
                ?>
                </select>
                <br>
                <label> Quantity </label>
                <input type="text" name="quantity">
                <br>
                <br>
                
                <input type="button" value="Add to cart" name="" class="btn success" onclick="addtocart()">
                <br>
                <hr>
                <div id="tbl"></div>
                <br>
                <hr>
                <label> Vendor's Name</label>
                <input type="text" name="vendor">
                <br>
                <input type="button" value="Save Data" name="" class="btn success" onclick="savePurchases()">
                <br>
                <br>



                
        </form>
        </div>
        <br>
        
        </div>
        </div>
        <script type="text/javascript" src="myscript.js">
            </script>