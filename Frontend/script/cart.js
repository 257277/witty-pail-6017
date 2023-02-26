import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();

let url = "http://localhost:4500/cart/";
const cart = async () => {
    // console.log(localStorage.getItem("token"));
    let res = await fetch(url, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    })
    if (res.ok) {
        let arr = await res.json();
        display(arr);

    }
}

cart();
let totalPrice = 0;
let totalQuantiy = 0;

function display(arr) {

    let cartitem = arr.map((item) => {
        totalPrice += item.price;
        totalQuantiy = arr.length;
        return `
        <div class="cartitem">
          <div class="cartimage">
             <img src="${item.image}">
          
            </div>
          <div class="cartdetail">
          <h3>Name: ${item.name}</h3>
             <label for="quantity">Qantity:</label>
             <input type:"number" placeholder="1" class="i${item._id}" id="i${item._id}" value="1">
            
             <br>
             <p>Size: ${item.size}</p> 
               <h3>Price: </h3> 
              <h3 class="p${item._id}" id="pi${item._id}" value="${item.price}">${item.price}</h3> 
              <button class="dltbtn" id="d${item._id}">DELETE</button>
           </div>
         </div>
         <hr>
 `
    })
    cartitem = cartitem.join(" ")

    document.querySelector("#fstcart1").innerHTML = cartitem
    document.querySelector("#fstcart2 .totalprice").innerHTML = totalPrice;
    document.querySelector("#fstcart2 .totalquantity").innerHTML = totalQuantiy;
    document.querySelector(".updateCart").addEventListener("click", () => {
        let inp = document.querySelectorAll(".cartdetail input");
        totalPrice = 0;
        totalQuantiy = 0;
        for (let i = 0; i < inp.length; i++) {

            let q = inp[i].value;
            let p = document.querySelector("#p" + `${inp[i].id}`).innerHTML;
            totalQuantiy += Number(q);
            totalPrice += q * p;
            document.querySelector("#fstcart2 .totalprice").innerHTML = totalPrice;
            document.querySelector("#fstcart2 .totalquantity").innerHTML = totalQuantiy;
        }
    })
    let dbtns = document.querySelectorAll(".dltbtn");
    console.log(dbtns);
    for (let btn of dbtns) {
        btn.addEventListener("click", (event) => {
            deletefromcart(event);
        })
    }

    function deletefromcart(event) {
        let id1 = event.target.id;

        let idf = id1.substring(1);
        deletefromcart1(idf);
    }

}

async function deletefromcart1(id) {
    let url = `http://localhost:4500/cart/delete/${id}`;
    let res = await fetch(url, {
        method: "DELETE",
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
    })
    if (res.ok) {
        console.log(res);
        window.location = "../cart.html";
    }
}

// function checkout() {
//     alert("Thankyou For Shopping");
//     window.location = "../index.html";
// }

document.querySelector("#checkout").addEventListener("click", () => {
    alert("Thankyou For Shopping");
    window.location = "../index.html";
});