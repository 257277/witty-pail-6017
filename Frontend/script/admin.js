import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();




// -----------------------------------    Cloths    ---------------------------------------------
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();

document.querySelector("#acloth").addEventListener("click", () => {

    cloth();
})
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
            <button id="d${arr[j]._id}">DELETE ITEM </button>
            </select>
            </div>
            </div>
            `
            }
        }

        allgroup += image

    }


    document.querySelector("#data").innerHTML = allgroup;

}
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
        // btns = document.querySelectorAll("#cloths button");
        // addcart(btns, arr);
    }



}// -----------------------------------    Cloths   Ends    ---------------------------------------------
