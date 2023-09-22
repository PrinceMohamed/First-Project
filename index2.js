document.querySelector(".form-group").addEventListener("submit", (ele)=>{
    let first = document.querySelector(".first");
    let last = document.querySelector(".last");
    let email = document.querySelector(".email");
    let pass = document.getElementById("pass").value;
    let remail =/[a-z]+[0-9]+@gmail.com/g
    if (first.value != ''&& last.value != ''&& remail.test(email.value) && pass.length > 8){
        console.log("Good Prince")
        console.log(pass.length)
        return true;
    }
    ele.preventDefault()
})
