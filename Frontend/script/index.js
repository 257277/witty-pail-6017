import { navComp } from "../components/NavCom.js";
import { footerComp } from "../components/FooterCom.js";
let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navComp();


let footer_div = document.getElementById("footer");
footer_div.innerHTML = footerComp();



let url = "http://localhost:4500/cloth"

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
    }
}

cloth();

const display = (arr) => {
    let allgroup = '';
    for (let i = 0; i < arr.length; i += 4) {
        let image = "";

        for (let j = i; j < i + 4; j++) {
            if (j < arr.length) {

                image += `<div>
                <img src="${arr[j].image}" alt="cloth">
                <h3>${arr[j].name}<h3>
                <p>€${arr[j].price}</p>
                </div>
                `

            }
        }

        allgroup += `<div class="swiper-slide">
               ${image}
            </div>
            `
    }

    document.querySelector(".swiper-wrapper").innerHTML = allgroup;
}
let url1 = "http://localhost:4500/shoes"
const shoes = async () => {
    let res = await fetch(url1, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json"
        }
    })
    if (res.ok) {
        let arr = await res.json();
        display1(arr);
    }
}
shoes();
const display1 = (arr) => {
    let allgroup = '';
    for (let i = 0; i < arr.length; i += 4) {
        let image = "";

        for (let j = i; j < i + 4; j++) {
            if (j < arr.length) {

                image += `<div>
                <img src="${arr[j].image}" alt="shoes">
                <h3>${arr[j].name}<h3>
                <p>€${arr[j].price}</p>
                </div>
                `

            }
        }

        allgroup += `<div class="swiper-slide">
               ${image}
            </div>
            `
    }

    document.querySelector(".swiper1 .swiper-wrapper").innerHTML = allgroup;


}
