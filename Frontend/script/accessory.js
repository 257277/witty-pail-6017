import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();
let url = "http://localhost:4500/accessories"
let btns = [];
const cloth = async () => {
    let res = await fetch(url, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json"

        }
    })
    if (res.ok) {
        let arr = await res.json();
        display(arr);
        btns = document.querySelectorAll("#accessory button");
        addcart(btns, arr);
    }
}

cloth();

let clotharray = [];
const display = (arr) => {
    clotharray = arr;
    let allgroup = '';
    for (let i = 0; i < arr.length; i += 4) {
        let image = "";


        for (let j = i; j < i + 4; j++) {

            if (j < arr.length) {
                let size = ""
                for (let k = 0; k < arr[j].size.length; k++) {
                    size += `<option vlaue="${arr[j].size[k]}">
                       ${arr[j].size[k]}
                   </option>
                   `
                }
                image += `<div class=item>
                <img src="${arr[j].image}" alt="cloth">
                <h3>${arr[j].name}<h3>
                <p>${arr[j].subname}</p>
                <p>€${arr[j].price}</p>
                <div class="size">
                <button class="cbtn"id="b${arr[i]._id}">ADD TO CART</button>
                </div>
                </div>
                `
            }
        }

        allgroup += image

    }


    document.querySelector("#accessory").innerHTML = allgroup;

}
let accessory = [];
let color = [];
let price = [];


document.querySelector("#Hat").addEventListener("click", () => {
    accessory.push("Hat")
})
document.querySelector("#scarf").addEventListener("click", () => {
    accessory.push("scarf")
})
document.querySelector("#bracelet").addEventListener("click", () => {
    accessory.push("bracelet")
})
document.querySelector("#sunglass").addEventListener("click", () => {
    accessory.push("sunglass")
})
document.querySelector("#Wallets").addEventListener("click", () => {
    accessory.push("Wallets")
})
document.querySelector("#necklace").addEventListener("click", () => {
    accessory.push("necklace")
})
document.querySelector("#Wallets").addEventListener("click", () => {
    accessory.push("Wallets")
})
document.querySelector("#glass").addEventListener("click", () => {
    accessory.push("glass")
})
document.querySelector("#band").addEventListener("click", () => {
    accessory.push("band")
})
document.querySelector("#belt").addEventListener("click", () => {
    accessory.push("belt")
})
document.querySelector("#Red").addEventListener("click", () => {
    color.push("red")
})
document.querySelector("#Green").addEventListener("click", () => {
    color.push("green")
})
document.querySelector("#Blue").addEventListener("click", () => {
    color.push("blue")
})
document.querySelector("#Black").addEventListener("click", () => {
    color.push("black")
})
document.querySelector("#White").addEventListener("click", () => {
    color.push("white")
})
document.querySelector("#Brown").addEventListener("click", () => {
    color.push("brown")
})
document.querySelector("#Silver").addEventListener("click", () => {
    color.push("silver")
})
document.querySelector("#Yellow").addEventListener("click", () => {
    color.push("yellow")
})
document.querySelector("#Acc").addEventListener("click", () => {
    price.push("Acc")
})
document.querySelector("#Dec").addEventListener("click", () => {
    price.push("Dec")
})
document.querySelector("#afltrbtn").addEventListener("click", () => {

    shoes1();
})
const shoes1 = async () => {
    let res = await fetch(url, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            "accessory": accessory,
            "color": color,
            "price": price
        }
    })
    if (res.ok) {
        let arr = await res.json();

        display(arr);
    }
}
function addcart(btns, arr) {
    for (let Btn of btns) {
        Btn.addEventListener("click", (event) => {
            let id = event.target.id;
            let fid = id.substring(1);;
            AddCartPage(fid, arr)
        });
    }
}
async function AddCartPage(id, arr) {
    let it = arr.filter((item) => {
        return item._id == id;
    })
    let url = "http://localhost:4500/cart/add";
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(it[0]),
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")

        }

    })
    if (res.ok) {
        let arr = await res;
        console.log(arr);
    }

}