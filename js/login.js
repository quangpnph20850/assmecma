let apiUser = "http://localhost:3000/user";


let username = document.querySelector(".username");
    console.log(username)
let password = document.querySelector(".password");
let loginbtn = document.querySelector(".loginbtn");


const getUser = async () =>{
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
}


loginbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    if(username.value == "" || password.value == ""){
        alert("Điền mật khẩu và tài khoản");
    }else{
        getUser().then((data) => {
            const user = data.find(
                (user) => user.username == username.value && user.password == password.value
            );
            console.log(user);
            if(user.roleId == 1){
                alert("Admin");
                window.location.href = "/sanpham.html";

            }else if(user){
                alert("thành công");
                window.location.href = "/index.html";

            }else{
                alert("false")
            }
        }
    )}
})






