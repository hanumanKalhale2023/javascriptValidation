function Register(){
    // localStorage.clear();
    var un=form1.username.value;
    var ps=form1.password.value;
    alert(un+" "+ps);
    localStorage.setItem("username",un);
    localStorage.setItem("password",ps);
    alert("Registration is successFully completed");
}

function Login(){
    var lun=localStorage.getItem("username");
    var lps=localStorage.getItem("password");
    var un=form2.loginUsername.value;
    var ps=form2.loginPassword.value;

    if(lun==un && lps==ps){
        alert("You have logged successfully");
    }
    else{
        alert("please enter valid username or password!");
    }

}