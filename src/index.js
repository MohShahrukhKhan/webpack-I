// Link:- `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I`

//  access key = "ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I" 
//  secret key = "XYG6bvKtj2Sx1jUpMxNBH1FBGZOc27SyRHHStJBg2wU" 

const API = "ETYW1sQz4f5XoevQUA-2v0WhZaGa0V0H945DKdpFN-I";

import navbar from "../component/navbar.js";

// console.log(navbar)
let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();

import { searchImg, append } from "./fetch.js";




let search = (event) => {
    if (event.key == "Enter") {
        let query = document.getElementById("query").value;
        searchImg(API, query).then((data) => {
            // console.log(data.results);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });

    }
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

// console.log(categories);


function cSearch(){
    // console.log(this.id);
    searchImg(API, this.id).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
} 


for(let el of categories){
    el.addEventListener("click", cSearch)
}




