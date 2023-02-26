import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();



document.querySelector("#signupform").addEventListener("click", () => {
    let obj = {};
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirmpassword").value;

    if (password == confirmpassword) {
        let gender = "";
        let ele = document.getElementsByName('options');
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                gender = ele[i].value
        }
        let name = `${gender} ${firstName} ${lastName}`
        obj = { name, email, password };
    }
    else {
        alert("Password Mismatch!")
    }
    let url = "http://localhost:4500/user/register";
    register1(url, obj);
});
let register1 = async (url, obj) => {
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (res.ok) {

        alert("User Registered!");
    }
    else {
        alert("Already Registered");
    }

}

document.querySelector("#loginform").addEventListener("click", () => {
    let obj = {};
    let email = document.querySelector("#lemail").value;
    let password = document.querySelector("#lpassword").value;
    obj = { email, password };
    let url = "http://localhost:4500/user/login";
    login(url, obj);
})

let login = async (url, obj) => {
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(res => {
            alert(res.msg)
            localStorage.setItem("token", res.token);
        })
        .catch(err => console.log("Wrong Credential"));
}
