
function formValidate(){

// Name Values
var name=document.getElementById("name").value;
var name_pattern=/^[A-Za-z ]{3,}$/;

//email values
var email=document.getElementById("myemail").value;
var e_pattern=/^[A-za-z._]{3,}[0-9]{0,}@[a-zA-z]{3,10}[.]{1}[a-zA-z.]{2,6}$/;

//contact values
var pno=document.getElementById("contact").value;
var p_pattern=/^[0-9]{10}$/;

//training type
var t_type=document.getElementById("training type").value;

//course type
var c_type=document.getElementById("course").value;

//message

var msg=document.getElementById("textAreaExample1").value;


if(name_pattern.test(name)){
    document.getElementById("name").classList.remove("is-invalid");
}else{
    document.getElementById("name").classList.add("is-invalid");
    return false;
}


if(e_pattern.test(email)){
    document.getElementById("myemail").classList.remove("is-invalid");
    
}else{
    document.getElementById("myemail").classList.add("is-invalid");
    return false;

}

if(p_pattern.test(pno)){
    document.getElementById("contact").classList.remove("is-invalid");
}else{
    document.getElementById("contact").classList.add("is-invalid");
    return false;

}

if(t_type == "online" || t_type == "offline"){
    document.getElementById("training type").classList.remove("is-invalid");
}else{
    document.getElementById("training type").classList.add("is-invalid");
    return false;

}

if(c_type == "C" || c_type == "C++" || c_type =="Core Java" || c_type == "Python with data science" || c_type == "Full stack web developemnt" || c_type == "Android Developemnt"){
    document.getElementById("course").classList.remove("is-invalid");
}else{
    document.getElementById("course").classList.add("is-invalid");
    return false;

}

if(msg == ""){
    document.getElementById("msg").classList.add("is-invalid");
    return false;    

}else{
    
    document.getElementById("msg").classList.remove("is-invalid");
}

}