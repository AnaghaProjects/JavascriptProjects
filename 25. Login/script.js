const emailInput = document.getElementById("email"),
passwordInput = document.getElementById("password");

const checkPassword = () => {
    let email = emailInput.value;
    let password = passwordInput.value;
    if(email === "anagha.sinless@gmail.com" && password === "test"){
        emailInput.value = "";
        passwordInput.value = ""
        alert("Correct Password")
    }else {
        document.querySelector(".errorMsg").classList.toggle("displayBlock");
    }
}
