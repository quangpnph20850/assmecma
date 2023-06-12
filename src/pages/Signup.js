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
        <div class="container max-w-4xl mx-auto px-4">
            <h1>Đăng ký</h1>
            <form id="form-signup" class="from">
                <input type="text" placeholder="Email"  id="email"/>
                <input type="password" placeholder="Password"  id="password"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default Signup;