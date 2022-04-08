function askName() {
    var name = prompt("Please enter your name");
    if (name != null) {
        document.getElementById("name").innerHTML = "Hi " + name + ",";
    }
    else{
        document.getElementById("name").innerHTML = "Hi, User";

    }
}
askName();