

var email = document.getElementById("email");

email.addEventListener("click", function(){
    // Copy the text inside the text field
    var alertMsg = document.getElementById("alertMsg");
    navigator.clipboard.writeText(email.innerHTML);
    // Alert the copied text
    alertMsg.style.display="block";
    $("#alertMsg").fadeOut(1000);
    });

var darkmode = document.getElementById("dark-toggler"); 
var bgimg=document.getElementById("header");
var counter = 0;
darkmode.addEventListener("click", function(){
    if (counter%2==0){bgimg.style.backgroundImage='url("../from ca03/assets/images/travel1.jpeg")';
        
    };
    if (counter%2!==0){bgimg.style.backgroundImage='url("../from ca03/assets/images/travel2.jpeg")';};
    counter++;
});