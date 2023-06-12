let apiUser = "http://localhost:3000/user";
const username = document.querySelector(".signup-username");
const password = document.querySelector(".signup-password");
const bntSignup = document.querySelector(".signup-btn");
// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Điền mật khẩu và tài khoản");
  } else {
    const user = {
      username: username.value,
      password: password.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert("Đăng ký thành công")
        window.location.href = "/login/login.html"
  })
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  }
  
});
