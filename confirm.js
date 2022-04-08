let pass1 = document.getElementById('exampleInputPassword1');
let pass2 = document.getElementById('exampleInputPassword2');
let submit = document.getElementById('submit');

//On clicking submit button if the password matches give alert "Password Matched"
submit.addEventListener('click', function () {
    if (pass1.value === pass2.value) {
        window.location.href = "login.html";
        alert("Password Matched");
    } else {
        alert('Password Not Matched');
    }
}
);

