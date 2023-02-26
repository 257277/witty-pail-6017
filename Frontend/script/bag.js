import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();

let url = "http://localhost:4500/bag"
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
        btns = document.querySelectorAll("#bags button");
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


    document.querySelector("#bags").innerHTML = allgroup;

}
let bags = [];
let size = [];
let color = [];
let price = [];


document.querySelector("#Crossbody").addEventListener("click", () => {
    bags.push("Crossbody")
})
document.querySelector("#Totes").addEventListener("click", () => {
    bags.push("Totes")
})
document.querySelector("#Briefcase").addEventListener("click", () => {
    bags.push("Briefcase")
})
document.querySelector("#Backpacks").addEventListener("click", () => {
    bags.push("Backpacks")
})
document.querySelector("#Pouches").addEventListener("click", () => {
    bags.push("Pouches")
})

document.querySelector("#EU_40").addEventListener("click", () => {
    size.push("EU_40")
})
document.querySelector("#EU_41").addEventListener("click", () => {
    size.push("EU_41")
})
document.querySelector("#EU_42").addEventListener("click", () => {
    size.push("EU_42")
})
document.querySelector("#EU_43").addEventListener("click", () => {
    size.push("EU_43")
})
document.querySelector("#EU_44").addEventListener("click", () => {
    size.push("EU_44")
})
document.querySelector("#EU_45").addEventListener("click", () => {
    size.push("EU_45")
})

document.querySelector("#EU_46").addEventListener("click", () => {
    size.push("EU_46")
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
document.querySelector("#bfltrbtn").addEventListener("click", () => {

    shoes1();
})
const shoes1 = async () => {
    let res = await fetch(url, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            "bags": bags,
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