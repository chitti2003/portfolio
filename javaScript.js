var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function onSubmit(){

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "" || email == " " ) {
      alert("Enter Valid Input");
      return false;
    }
    else{
        alert("Message sent successfully")
    }
}