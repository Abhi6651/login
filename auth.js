const signupForm = document.querySelector("#sign");
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = signupForm["sign-email"].value;
    const password = signupForm["sign-password"].value;
    //console.log(email,password);
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred);
    })
})
// function signup() {
//     const email = document.getElementById("sign-email");
//     const password = document.getElementById("sign-password");
//     const promise =auth.createUserWithEmailAndPassword(email.value,password.value);
//     promise.catch(e => alert(e.message));
//     alert("signup");
    
// }