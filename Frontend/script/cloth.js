import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();


let url = "http://localhost:4500/cloth"
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
        btns = document.querySelectorAll("#cloths button");
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
         
             
                <label for="size1">Choose size:</label>
                <select class="size1">
                
                ${size}
                </select>
                </div>
                </div>
                `
            }
        }

        allgroup += image

    }


    document.querySelector("#cloths").innerHTML = allgroup;

}

let clothing = [];
let size = [];
let color = [];
let price = [];


document.querySelector("#Jackets").addEventListener("click", () => {
    clothing.push("Jackets")
})
document.querySelector("#Coats").addEventListener("click", () => {
    clothing.push("Coats")
})
document.querySelector("#Pants").addEventListener("click", () => {
    clothing.push("Pants")
})
document.querySelector("#Shirts").addEventListener("click", () => {
    clothing.push("Shirts")
})
document.querySelector("#T-Shirts").addEventListener("click", () => {
    clothing.push("T-Shirts")
})
document.querySelector("#Shorts").addEventListener("click", () => {
    clothing.push("Shorts")
})

document.querySelector("#XXS").addEventListener("click", () => {
    size.push("XXS")
})
document.querySelector("#XS").addEventListener("click", () => {
    size.push("XS")
})
document.querySelector("#S").addEventListener("click", () => {
    size.push("S")
})
document.querySelector("#M").addEventListener("click", () => {
    size.push("M")
})
document.querySelector("#L").addEventListener("click", () => {
    size.push("L")
})
document.querySelector("#XL").addEventListener("click", () => {
    size.push("XL")
})
document.querySelector("#XXL").addEventListener("click", () => {
    size.push("XXL")
})

document.querySelector("#threeXL").addEventListener("click", () => {
    size.push("3XL")
})

document.querySelector("#fourXL").addEventListener("click", () => {
    size.push("4XL")
})
document.querySelector("#fiveXL").addEventListener("click", () => {
    size.push("5XL")
})
document.querySelector("#sixXL").addEventListener("click", () => {
    size.push("6XL")
})
document.querySelector("#MorL").addEventListener("click", () => {
    size.push("M/L")
})
document.querySelector("#twentyfive").addEventListener("click", () => {
    size.push("25")
})
document.querySelector("#twentysix").addEventListener("click", () => {
    size.push("26")
})
document.querySelector("#twentyseven").addEventListener("click", () => {
    size.push("27")
})
document.querySelector("#twentyeight").addEventListener("click", () => {
    size.push("28")
})
document.querySelector("#twentynine").addEventListener("click", () => {
    size.push("29")
})
document.querySelector("#thirty").addEventListener("click", () => {
    size.push("30")
})
document.querySelector("#thirtyone").addEventListener("click", () => {
    size.push("31")
})
document.querySelector("#thirtytwo").addEventListener("click", () => {
    size.push("32")
})
document.querySelector("#thirtythree").addEventListener("click", () => {
    size.push("33")
})
document.querySelector("#thirtyfour").addEventListener("click", () => {
    size.push("34")
})
document.querySelector("#thirtyfive").addEventListener("click", () => {
    size.push("35")
})
document.querySelector("#thirtysix").addEventListener("click", () => {
    size.push("36")
})
document.querySelector("#thirtyseven").addEventListener("click", () => {
    size.push("37")
})
document.querySelector("#thirtyeight").addEventListener("click", () => {
    size.push("38")
})
document.querySelector("#threeXLorfourXL").addEventListener("click", () => {
    size.push("3XL/4XL")
})
document.querySelector("#threeXS").addEventListener("click", () => {
    size.push("3XS")
})
document.querySelector("#fourty").addEventListener("click", () => {
    size.push("40")
})
document.querySelector("#fourtytwo").addEventListener("click", () => {
    size.push("42")
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


document.querySelector("#fltrbtn").addEventListener("click", () => {

    cloth1();
})
const cloth1 = async () => {
    let res = await fetch(url, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            "clothing": clothing,
            "size": size,
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