let navbar = document.querySelector(".navbar");
let searchbox = document.querySelector(".search-box .bx-search");
// <i class='bx bx-x'></i>
searchbox.addEventListener("click", ()=>{
 navbar.classList.toggle("showInput");
 if(navbar.classList.contains("showInput")){
    searchbox.classList.replace("bx-search" ,"bx-x");
 }else {
 searchbox.classList.replace("bx-x" ,"bx-search");
}  
})