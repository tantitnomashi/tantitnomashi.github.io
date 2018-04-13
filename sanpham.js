// JavaScript Document
// JavaScript Document
var totalP ;
var Leashes = [
			{
				code:"L1",
				name:"ROPE DOG LEASH",
				color:"SANDY YELLOW",
				price:62,
				image:"img/L1.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{ 
				code:"L2",
				name:"ROPE DOG LEASH",
				color:"RED",
				price:54,
				image:"img/L2.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L3",
				name:"ROPE DOG LEASH",
				color:"BLACK, DARK GRAY, IVORY",
				price:74,
				image:"img/L3.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L4",
				name:"ROPE DOG LEASH",
				color:"BLACK",
				price:54,
				image:"img/L4.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L5",
				name:"ROPE DOG LEASH",
				color:"PASTEL PINK",
				price:64,
				image:"img/L5.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L",
				name:"ROPE DOG LEASH",
				color:"BISQUE",
				price:34,
				image:"img/L6.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L7",
				name:"ROPE DOG LEASH",
				color:"DENSITY PINK",
				price:74,
				image:"img/L7.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L8",
				name:"ROPE DOG LEASH",
				color:"SAPPHIRE",
				price:54,
				image:"img/L8.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L9",
				name:"ROPE DOG LEASH",
				color:"BLUE",
				price:54,
				image:"img/L9.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L10",
				name:"ROPE DOG LEASH",
				color:"LIME GREEN",
				price:64,
				image:"img/L10.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L11",
				name:"ROPE DOG LEASH",
				color:"RED, YELLOW",
				price:64,
				image:"img/L11.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			{
				code:"L12",
				name:"ROPE DOG LEASH",
				color:"BLACK",
				price:64,
				image:"img/L12.jpg",
				desc:"<br>Handcrafted<br>Withstand hundreds of pounds of pull with the ends<br>ADJUSTABLE <br> Made in VietNam"
			},
			
		
			{
				code:"C001",
				name:"ROPE, LEATHER CAT, DOG COLLAR",
				color:"MIAMI GREEN",
				price:52,
				image:"img/C1.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C002",
				name:"COTTON ROPE CAT, DOG COLLAR",
				color:"MAGENTA OMBRE",
				price:64,
				image:"img/C2.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C003",
				name:"ROPE, LEATHER CAT, DOG COLLAR",
				color:"BROWN",	
				price:52,
				image:"img/C3.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C004",
				name:"ROPE, LEATHER CAT, DOG COLLAR",
				color:"RESCUE ORANGE",
				price:52,
				image:"img/C4.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C005",
				name:"COTTON CAT, DOG COLLAR",
				color:"RED TO PINK",
				price:40,
				image:"img/C5.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C006",
				name:"COTTON ROPE CAT, DOG COLLAR",
				color:"INDIGO OMBRE",
				price:52,
				image:"img/C6.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C007",
				name:"COTTON ROPE CAT, DOG COLLAR",
				color:"TEAL OMBRE",
				price:52,
				image:"img/C7.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>From domestic leather and V.N. manufactured marine-grade rope.<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"C008",
				name:"THE LEATHER ALTERNATIVE CAT, DOG COLLAR",
				color:"BLACK",
				price:64,
				image:"img/C8.jpg",
				desc:"<br>Our rope and leather collar is hand made in Ho Chi Minh city.<br>The webbing is 100% waterproof and is super durable<br>To clean, simply wipe down with a cloth, just like your favorite pair of rain boots<br>All hardware is 100% solid brass.<br>Made in VietNam"
			},
			{
				code:"H001",
				name:"COTTON CAT & DOG HARNESS",
				color:"BLACK",
				price:52,
				image:"img/H1.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H002",
				name:"COTTON CAT & DOG HARNESS",
				color:"INDIGO",
				price:52,
				image:"img/H2.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H003",
				name:"COTTON CAT & DOG HARNESS",
				color:"MEGANTA",
				price:52,
				image:"img/H3.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H004",
				name:"COTTON CAT & DOG HARNESS",
				color:"OLIVE",
				price:52,
				image:"img/H4.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H005",
				name:"COTTON CAT & DOG HARNESS",
				color:"PURPLE",
				price:52,
				image:"img/H5.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H006",
				name:"COTTON CAT & DOG HARNESS",
				color:"TEAL",
				price:52,
				image:"img/H6.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H007",
				name:"COTTON CAT & DOG HARNESS",
				color:"ORANGE",
				price:52,
				image:"img/H7.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			{
				code:"H008",
				name:"COTTON CAT & DOG HARNESS",
				color:"RED TO PINK",
				price:52,
				image:"img/H8.jpg",
				desc:"<br>Hand dyed and crafted in Ha Noi<br>our dog & cat harnesses are made from 100% cotton webbing and top stitched with industrial thread for added durability.<br> Made in VietNam"
			},
			];

function test(){
  
   var divcoha  = document.createElement("div");
   divcoha.innerHTML="Harness";
   divcoha.setAttribute("class","leash");
    var kind = document.getElementById("kind");
    kind.appendChild(divcoha);
   
}

function display(arr){
        var kind = document.getElementById("kind");
    
      for(var i=0; i <arr.length;i++){
           // mỗi sản phẩm là một divngoai
           if(i == 12 ){
               test();
           }
                var divngoai = document.createElement("div");
                var anh = document.createElement("img");
                anh.src = arr[i].image;
          
                // tạo divcon chứa 3 cái span 
                var div_con = document.createElement("div");

                // còn cái click để phóng to detail
                var span1 = document.createElement("span");
                span1.innerHTML = arr[i].name;
                var span2 = document.createElement("span");
                span2.innerHTML = arr[i].color;
                 var span3 = document.createElement("span");
                span3.innerHTML = arr[i].price+".99 $";

                // add con 
                kind.appendChild(divngoai);
                divngoai.appendChild(anh);
                divngoai.appendChild(div_con);

                div_con.appendChild(span1);
                div_con.appendChild(span2);
                div_con.appendChild(span3);

                //set class
                divngoai.setAttribute("class","product");
                div_con.setAttribute("class","product-info")
                
                
                //click vào chạy hàm show detail chi tiết 1 sản phẩm 
                divngoai.addEventListener("click",showDetail);
    }
    
}

function frame(){ // set display để hiện ra 
    
     var mainframe = document.getElementById("main-frame");
     mainframe.style.display= "block";
    
             }
function wait(){  // đợi 3s set display hiện ra
   
    setTimeout(frame,3000);
    
}

function startframe(locati){ // sau khi chọn thì tắt frame
    
    
      var mainframe = document.getElementById("main-frame");
      mainframe.style.display= "none";
    
     //alert(loca);
     var locatag= document.getElementById("location-store");
     if(locati.value === "Hanoi"){
         locatag.innerHTML="28. Hang Xeng St. Hanoi"; 
         window.localStorage.setItem("loca",1);
     }
    else if(locati.value === "Danang"){
         locatag.innerHTML="11. BachDang St. Danang"; 
        window.localStorage.setItem("loca",2);
     }
     else if(locati.value === "Saigon"){
         locatag.innerHTML="98. NguyenTrai St. HCM city"; 
         window.localStorage.setItem("loca",3);
     }
     
    
} 

function searchProduct(tenanh)
{
    for(var i=0; i< Leashes.length;i++)
        {
            if(Leashes[i].image=="img/"+ tenanh )
                return i;
        }
    return -1;
}
function showDetail(){
    var thespan = window.event.target;
    var div_ngoai=thespan.parentElement.parentElement;
    var the_hinh= div_ngoai.getElementsByTagName("img")[0];
   // alert(thehinh);
    var j = the_hinh.src.lastIndexOf("/");
    var tenanh= the_hinh.src.substring(j+1);
   // alert(tenanh);
    var kq = searchProduct(tenanh);
   // alert(kq);
    if(kq>= 0){
        var hinh =  document.getElementById("hinh");
        hinh.src= Leashes[kq].image;
        hinh.setAttribute("alt",Leashes[kq].code);
        
        
         var infor =  document.getElementById("infor");
         
        var tam = document.getElementById("spancode");
        if(tam != null)
            infor.removeChild(tam);
        var tam2 = document.getElementById("spanname");
        if(tam2 != null)
            infor.removeChild(tam2);
        var tam3 = document.getElementById("spanprice");
        if(tam3 != null)
            infor.removeChild(tam3);
        var tam4 = document.getElementById("spandes");
        if(tam4 != null)
            infor.removeChild(tam4);
        
       // alert(infor.childNodes.length);
         var span1 = document.createElement("span");
                span1.innerHTML = Leashes[kq].code;
         var span2 = document.createElement("span");
                span2.innerHTML = Leashes[kq].name;
         var span3 = document.createElement("span");
                span3.innerHTML = Leashes[kq].price +".99$";
         var span4 = document.createElement("span");
                span4.innerHTML = Leashes[kq].desc;
        
          infor.appendChild(span1);
          infor.appendChild(span2);
          infor.appendChild(span3);
          infor.appendChild(span4);
        //alert(infor.childNodes.length);
          span1.setAttribute("id","spancode");
        span2.setAttribute("id","spanname");
        span3.setAttribute("id","spanprice");
        span4.setAttribute("id","spandes");
        var detail= document.getElementById("detailPr");
        detail.style.display="block";
        //scroll màn hình về đầu 
         mySetTime();
        // nút tắt
        var close = document.getElementById("closedetail");
        close.style.display="block";
    }
    
}

var id1;
function truot(){
    var y= window.pageYOffset;
     y = y-50;

    if(y <= 500)
        clearInterval(id1); // không clear interval được
        window.scroll(0,y);
}
function mySetTime(){
    id1 = window.setInterval(truot,20);

}

////////////////////////////////////////////////
function init() {
      var locatag= document.getElementById("location-store");
     if(window.localStorage.getItem("count")== null)
         window.localStorage.setItem("count",0);
    // kiểm tra coi đã chọn địa điểm chưa 
      if(window.localStorage.getItem("loca")!= null)
           {  // alert(window.localStorage.getItem("loca"));
               var mainframe = document.getElementById("main-frame");
               mainframe.style.display= "none";
               var keyloca = window.localStorage.getItem("loca");
               if(keyloca == '1'){
                    locatag.innerHTML="28. Hang Xeng St. Hanoi"; 
               }
               else if(keyloca == '2'){
                    locatag.innerHTML="11. BachDang St. Danang"; 
               }
               else if(keyloca == '3'){
                    locatag.innerHTML="98. NguyenTrai St. HCM city"; 
               }
           }
    
}


function addProduct(id_hinh, id_select){
    var masp = document.getElementById(id_hinh).alt;
    var theselect = document.getElementById(id_select);
    var i = theselect.selectedIndex; 
    var kichco= theselect.options[i].text;
    
    var result=window.localStorage.getItem(masp+","+kichco); 
    
    if(result==null)
        {
            var c =  window.localStorage.getItem("count");/*gọi count từ local Storage*/
                c = parseInt(c)+1; 
            window.localStorage.setItem("count",c);   /* thay đổi count */
            window.localStorage.setItem(masp+","+kichco,"1");
            window.alert("You have added this item to your cart ! ");
            var countCart = document.getElementById("count-cart");
            countCart.innerHTML=c;
            
            
        }
    else
        {
                result= parseInt(result)+1; 
                window.localStorage.setItem(masp+ ","+kichco, result); 
        }
    
}
function showHang(){
    //alert(":giohangne");
    var sum=0; //để tính total
   
     // khỏi tạo table 
    var s="<table><caption> Your Cart <3 </caption>"; 
    s = s + "<tr>";
    s = s + "<th>Code</th>";
    s = s + "<th>Name</th>";
    s = s + "<th>Price/unit</th>";
    s = s + "<th>Quantity</th>";
    s = s + "<th>Image</th>";
    s = s + "<th>Size</th>";
    s = s + "<th>Price</th>";
    s = s + "<th>Delete</th>";
    s = s + "</tr>";
    
    // code này lấy giỏ hàng ra  
    
    
    for(var i=0; i <window.localStorage.length;i++)
        {
            var key = window.localStorage.key(i);
            var value = window.localStorage.getItem(key);
            
            if(key != null && key.match("[a-zA-Z0-9]+[,]+[S,M,L]$") != null)
                {   
                    var ma_size = key.split(",");
                    var ma = ma_size[0];
                    var size = ma_size[1];
                    var sl = value;
                 
                    var pos = findProduct(ma);
                    
                    var ten = Leashes[pos].name;
                    var gia = Leashes[pos].price;
                    var hinh = Leashes[pos].image;
                     s = s + "<tr>";
                     s = s + "<td>"+ ma +"</td>";
                     s = s + "<td>"+ ten +"</td>";
                     s = s + "<td>"+ gia +"</td>";
                     s = s + "<td><input type='number' value='"+ sl +"' min='1' max='10' onchange='sua(this,\""+key+"\")' </td>";
                     s = s + "<td><img src='"+ hinh +"'></td>";
                     s = s + "<td>"+ size +"</td>";
                     s = s + "<td>"+ gia*sl +"</td>";
                     s = s + "<td><input id='xoacart' type='button' value='Del' onclick='xoa(\""+key+"\")' ></td>";
                     sum += gia*sl;
                }
            
            
        }
            //hết for đóng table
             s = s + "</table>";
            // s = s + "<p>Tong tien la: "+ sum + "dollar </p>";
            var total = document.getElementById("totalprice");
            total.innerHTML="Total: " + (sum-1) + ".99$";
            var divchitiet = document.getElementById("chitiet");
            divchitiet.innerHTML=s;
        
    
            var atag = document.getElementById("totalPina");
    
            atag.href+=sum;
          
}
function totalPriceinOrder(){
    var total = document.getElementById("totalpriceS");
    var string = window.location.href;
    var getit = new Array();
    getit=string.split("?");
    var total1 = unescape(getit[1]);
    console.log(total1);
    total.innerHTML="Total: " + parseInt(total1-1) + ".99$";
    
}
function order(){
    
    var d = new Date();
    var ngay = d.getDate();
    var thang = d.getMonth() + 1;
    var nam = d.getFullYear();
    var p1 = document.getElementById("ngaydat");
    p1.innerHTML= "Order date: " +ngay + "/" +thang + "/" + nam; 
    
    
    var number = Math.round(Math.random()*8999)+1000;
    var p2 = document.getElementById("soddh");
    p2.innerHTML= "Order number: " +number;
}
function findProduct(masanphamcantim){
    //timd sản phẩm qua code
    
    for(var i =0; i < Leashes.length; i++){
        if(Leashes[i].code== masanphamcantim)
            return i;
        
    }
    return -1;
    
}
function sua(control,key){
    //control number của thẻ input số lượng 
    var sl_moi = control.value;
    window.localStorage.setItem(key,sl_moi);
    showHang();
}
function xoa(keyname){
    
    
    var traloi = window.confirm("Are your sure to remove this item out of cart ? ");
    if(traloi == true){
        
       window.localStorage.removeItem(keyname);
        
        //console.log(localStorage.getItem(localStorage.key(2)));
        var c= window.localStorage.getItem("count");
        c--;
        window.localStorage.setItem("count",c);
        showHang();
    }
}
function validdate() {
      var t1 = document.getElementById("t1");
      var t2 = document.getElementById("t2");
      var t3 = document.getElementById("t3");
    if(t1.value ==="")
        {
            alert("Name is emty: ");
            t1.focus();
            return false;
        }
    else if(t1.value ==="" || t2.value.match("^[0-9]{10,11}$") == null){
        
        alert("Phone is invalid");
        t2.focus(); /* bỏ con trỏ vào ô này */
        return false;
    }
    else if(t3.value ==="")
        {
            alert("Address is emty: ");
            t3.focus();
            return false;
        }
    alert("Cảm ơn bạn đã đặt hàng");
    window.localStorage.clear();
    window.open("index.html");
    return true;
}
function copy(){
      var t1 = document.getElementById("t1");
      var t2 = document.getElementById("t2");
      var t3 = document.getElementById("t3");
      var t4 = document.getElementById("t4");
      var t5 = document.getElementById("t5");
      var t6 = document.getElementById("t6");
      t4.value= t1.value;
      t5.value= t2.value;
      t6.value= t3.value;
}







