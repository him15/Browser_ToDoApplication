let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main_container");
let body=document.body;
let plusBtn=document.querySelector(".fa-plus");

let input="";
for(let i=0;i<colorBtn.length;i++){
    colorBtn[i].addEventListener("click", function(e){
        
        console.log(e);
        let color=colorBtn[i].style.backgroundColor;
        mainContainer.style.backgroundColor=color;
    })
}

plusBtn.addEventListener("click" ,createModal);


     // create modal
    function createModal(){
        let modal_container=document.createElement("div");
        modal_container.setAttribute("class", "modal_container");
        modal_container.innerHTML=` <div class="input_container" >
        <textarea type="text" class="modal_input" placeholder="Enter the text..."></textarea>
        </div>
        <div class="modal_filter_container">
                <div class="color" style="background-color:pink;"></div>
                <div class="color" style="background-color: aqua;"></div>
                <div class="color" style="background-color:lightgreen ;"></div>
                <div class="color" style="background-color: black;"></div>
                </div>`;
            body.appendChild(modal_container);
            handleModal(modal_container);

    }

    // handle modal
    function handleModal(modal_container){
        let modal_color=document.querySelectorAll(".color");
        modal_color[3].classList.add("class","border");
       let bcolor="black";
        for(let i=0;i<modal_color.length;i++){
            modal_color[i].addEventListener("click", function(e){
                
                // first we have to remove border from all elements
                modal_color.forEach((filter)=>{
                    filter.classList.remove("class", "border");
                })
                // now add the boder in clicked color
                modal_color[i].classList.add("class","border");
                bcolor=modal_color[i].style.backgroundColor;
            })
        }
        let textArea=document.querySelector(".modal_input");
        textArea.addEventListener("keydown",function(event){
            if(event.key == "Enter"){
                input=textArea.value;
                addTaskContainer(input , bcolor);
                modal_container.parentElement.removeChild(modal_container);
            }
        })
    }



    
    function addTaskContainer(input , color){
        let taskContainer=document.createElement("div");
        taskContainer.setAttribute("class","task_container");
        taskContainer.innerHTML=`<div class="task_container">
                <div class="task_filter ${color}"></div>
                <div class="task_desc_container">
                    <h3 class="uid">#example 1</h3>
                    <div class="task_desc"> ${input} </div>
                </div>
        </div>`;
        mainContainer.appendChild(taskContainer);
    }
                            
                            
                            