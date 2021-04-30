let input=document.querySelector(".input_box");
let ul=document.querySelector(".task-list");

input.addEventListener("keydown" , function(e){
    // e is the Event Object -> describe event 
    console.log("Event Object -> ", e);
    if(e.key == "Enter"){
        let task=input.value;
        console.log(task);

        // we can create any html tag by using create Element 
        let li=document.createElement("li");
        li.innerText=task;

        li.addEventListener("dblclick", function(){
            li.remove();
        })
        // set attributr
        li.setAttribute("class", "task");
        ul.appendChild(li);
        input.value="";
    }

})