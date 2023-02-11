document.getElementById("login-btn").addEventListener("click",function(){
    const emailFilt = document.getElementById("user-email");
    const email = emailFilt.value;
    emailFilt.value = "";
    const passwordFilt = document.getElementById("user-password");
    const password = passwordFilt.value;
    passwordFilt.value = "";
    if(email === "alihasan404439@gmail.com" && password === "404439"){
        location.href = "back.html"
    }
    else{
        alert("Please Your Rignt Information")
    }
});

