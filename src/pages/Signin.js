import Header from "../components/Header";
import { router, useEffect } from "../lib";
const Signin = () => {
    useEffect(() => {
        const formSignin = document.querySelector("#form-signin");
        if (!formSignin) return;
        formSignin.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            })
                .then((response) => response.json())
                .then((data) => {
                    // lưu vào localStorage
                    console.log("bạn đã đăng nhập thành công");
                    localStorage.setItem("user", JSON.stringify(data));
                });
        });
    });
    return /*html*/`
     

        <div class="login-page">
        <div class="form">
          
  
          <div class="login">
            <a href="/index.html">
              <i class="fa-sharp fa-solid fa-house fa-beat"></i>
            </a>
            <div class="login-header">
              <h3>LOGIN</h3>
            </div>
          </div>
        <form class="login-form"  method="get" id="form-signin">
          <input type="text" class="username" placeholder="Email" id="email"/>
        
          <input type="password"  class="password" placeholder="Mật khẩu " id="password" >
          <input type="submit" class="loginbtn" value="Đăng nhập">
          
          <a class="dangky" href="/signup"> Đăng ký
          </a>
  
  
      </form>
        </div>
      </div>
    `;
};
export default Signin;
