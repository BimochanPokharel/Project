
// var cart=[]
// function addtocart()
// {
//     event.preventDefault();
//     var itemname=$("select[name='itemname']").val();
//     var quantity=$("input[name='qunatity']").val()
//     var price=$("select[name='itemname'] option:selected").attr("price");
//     var id=$("select[name='itemname'] option:selected").attr("myid");
//     var obj={"id":id,"itemname":itemname,"quantity":quantity,"price":price}
//     cart.push(obj);

//     displaycart();
// }


// function displaycart()
// {
//     var table="<table border=1 class='display_table'>";
//     table+="<tr><th>SN<th>ItemName<th>Qunatity<th>Price<th>Total</tr>";
//     var sumTotal=0;
//     for(var i=0;i<cart.length;i++)
//     {
//         table+="<tr>";
//         table+="<td>"+(i+1);
//         table+="<td>"+cart[i]['itemName'];
//         table+="<td>"+cart[i]['quantity'];
//         table+="<td>"=cart[i]['price'];
//         var total=cart[i]['quantity']*cart[i]['price'];
//         sumTotal+=total;
//         table+="<td>"+total;
//         table+="<td><button class='btn delete' onclick='deleteFromCart("+i+")'>Delete</button>"
//         table="</tr>"

//     }
//     table+="<tr><td align=center colspan=4>Total</td>"
//     table+="<td>"+sumTotal
//     table+="</table>";
//     $(".cart").html(table);
// }
// function deleteFromCart(index)
// {
//     event.preventDefault();
//     myCart.splice(index,1);
//     displaycart()
// }




// function savePurchase()
// {
//     var vendor=$("input[name='vendor'").val();
//     var data={"vendor":vendor};
//     $.ajax({
//         url:"insertPur"
//     })
// }
















var myCart=[]


function addtocart(){
    event.preventDefault();
    var itemName=$("select[name='item']").val()
    var quantity=$("input[name='quantity']").val()
    var price=$("select[name='item'] option:selected").attr("price");
    var id=$("select[name='item'] option:selected").attr("myid");
    var obj={"id":id,"itemName":itemName,"quantity":quantity,"price":price}
    myCart.push(obj)

    displaycart()
}
function displaycart(){
    var table= "<table border=1 class='display_table'>";
    table+="<tr><th>SN<th>ItemName<th>Quantity<th>Price<th>Total<th>Action</tr>";
    var sumTotal=0;
    for(var i=0; i<myCart.length;i++){
        table+="<tr>";
        table+="<td>"+(i+1);
        table+="<td>"+myCart[i]['itemName']
        table+="<td>"+myCart[i]['quantity']
        table+="<td>"+myCart[i]['price']
        var total = myCart[i]['quantity']*myCart[i]['price']
        sumTotal+=total;
        table+="<td>"+total;
        table+="<td><button class='btn delete' onclick='deleteFromCart("+(i)+")'> Delete </button></td>"
        table+="</tr>";
    }
    table+="<tr><td align=center colspan=4>Total</td>";
    table+="<td>"+sumTotal
    table+="</table>";
    $("#tbl").html(table)

}
function deleteFromCart(index){
    event.preventDefault();
    myCart.splice(index,1);
    displaycart();
}
function savePurchases(){
    var vendor=$("input[name='vendor']").val();
    var data={"vendor":vendor};
    console.log(data)
    $.ajax({
        url:"insertPurchase.php",
        method:"post",
        data:data,
        beforeSend:function(){},
        success:function(response){
            // console.log(response)
            saveBill(response)
            
        },
        error:function(){}
       

    }
);
    

}
function saveBill(id){
    for(var i=0; i<myCart.length; i++){
        obj=myCart[i];
        obj.vendor_id=id;
        console.log(obj)
        $.ajax({
            url:"saveBill.php",
            type:"post",
            data:obj,
            beforeSend(){},
            success:function(response){
                $(".content").html(response);

            },
            error:function(){}

        });
    }

}







