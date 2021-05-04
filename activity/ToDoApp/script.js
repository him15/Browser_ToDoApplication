let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main_container");

for(let i=0;i<colorBtn.length;i++){
    colorBtn[i].addEventListener("click", function(e){
        
        console.log(e);
        let color=colorBtn[i].style.backgroundColor;
        mainContainer.style.backgroundColor=color;
    })
}
