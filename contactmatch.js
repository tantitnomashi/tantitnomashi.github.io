// JavaScript Document

function validate()
{
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	var t4= document.getElementById("contact-input-1");
	if(t1.value=="")//nếu ko nhập tên
	{
		alert("Your name is invalid");
		t1.focus();//kết thúc hàm
		return false;
	}
	else if(t2.value==""|| t2.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)==null)
	{
		alert("Your email is invalid");
		t2.focus();
		return false;
	}
	else if(t3.value=="")
	{
		alert("Your subject is empty");
		t3.focus();
		return false;
	}
	else if(t4.value=="")
	{
		alert("Your message is invalid");
		t4.focus();
		return false;
	}
	alert("Thank you for your feedback. Your feedback will be check and learn from experience.");
	window.localStorage.clear();
	window.open("index.html"/*,"_top"*/);// mở file giohang.html
	return true;
}
function validate2()
{
	var t5 = document.getElementById("contact-footer-email");
	if(t5.value==""|| t5.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)==null)
	{
		alert("Your email is invalid");
		t5.focus();//kết thúc hàm
		return false;
	}
	mission-center-2-footer-email
	//window.localStorage.clear();
	return true;
}
function validate3()
{
	var t6 = document.getElementById("mission-center-2-footer-email");
	if(t6.value==""|| t6.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)==null)
	{
		alert("Your email is invalid");
		t6.focus();//kết thúc hàm
		return false;
	}
	alert("Thank you. We wil contact to you soon !.");
	//window.localStorage.clear();
	return true;
}

function validate4()
{
	var t1 = document.getElementById("t9");
	var t2 = document.getElementById("t10");
	var t3 = document.getElementById("t11");
	var t4= document.getElementById("contact-input-1");
	if(t1.value=="")//nếu ko nhập tên
	{
		alert("Your name is invalid");
		t1.focus();//kết thúc hàm
		return false;
	}
	else if(t2.value==""|| t2.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)==null)
	{
		alert("Your email is invalid");
		t2.focus();
		return false;
	}
	else if(t3.value=="")
	{
		alert("Your Donation is invalid");
		t3.focus();
		return false;
	}
	else if(t4.value=="")
	{
		alert("Your message is invalid");
		t4.focus();
		return false;
	}
	alert("Thank you for your donation. We will contact to you soon !.");
//	window.localStorage.clear();
	window.open("index.html"/*,"_top"*/);// mở file giohang.html
	return true;
}