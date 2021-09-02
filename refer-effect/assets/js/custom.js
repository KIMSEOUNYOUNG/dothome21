

    //Code view
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });
    
    //Code tab menu
    const vTitle = document.querySelectorAll(".view-title ul li");
    const vCode = document.querySelectorAll(".view-cont > div");

    vTitle.forEach((element, index) => {
        element.addEventListener("click", function(){

            vTitle.forEach((el)=>{
                el.classList.remove("active");
            });
            element.classList.add("active");

            vCode.forEach((el)=>{
                el.style.display = "none";
            });
            vCode[index].style.display = "block";
        });
    });
    
    

    //modal
    document.querySelector(".bottom button").addEventListener("click", function(){
        document.querySelector("#modal").classList.remove("hide");
        document.querySelector("#modal").classList.add("show");
    });
    
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#modal").classList.add("hide");
    });
