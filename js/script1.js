var user =new Map([["web","123456789"]])

function login(){
    var username =document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if(user.get(username)==password){
        alert("登陆成功");
        window.location.href="https://huge-ewbok.github.io/X1aoHu.github.io/first.html"
    }
    else{
        alert("用户名或密码错误");
    }
}

function register(){
    var username =document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    if(password.length>8){
        user.set(username,password);
    alert("注册成功，请登录");
    document.getElementById("register-username").value="";
    document.getElementById("register-password").value="";
    document.getElementById("register-email").value="";
    }
    else{
        alert("密码必须大于8位")
    }

}
