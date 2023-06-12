import { router, useEffect } from "../lib";
const Signup = () => {
    useEffect(() => {
        const formSignup = document.querySelector("#form-signup");
        if (!formSignup) return;
        formSignup.addEventListener("submit", function (event) {
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
            }).then(() => {
                alert("bạn đăng ký thành công")
                router.navigate('/signin')
            });
        });
    });

    return /*html*/`
     


        <div class="login-page">
      <div class="form">
        

        <div class="login">
          <a href="/picstudio-html/index.html">
            <i class="fa-sharp fa-solid fa-house fa-beat"></i>
          </a>
          <div class="login-header">
            <h3>Đăng Ký</h3>
          </div>
        </div>
      <form class="login-form" id="form-signup">
        <input type="text" class="signup-username" placeholder="Nhập email" id="email"> 
        <input type="password"  class="signup-password" placeholder="Nhập mật khẩu" id="password" >
        <input type="submit" class="signup-btn" value="Đăng Ký">
        <a class="dangnhap" href="/signin"> Đăng Nhập
        </a>
    </form>
      </div>
    </div>
    `;
};
export default Signup;