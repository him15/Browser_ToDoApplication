let input=document.querySelector(".input_box");
let ul=document.querySelector(".task-list");
let arr=[];

if(localStorage.getItem("allTask")){
    let stringArr=localStorage.getItem("allTask");
    // parse
    arr=JSON.parse(stringArr);
    for(let i=0;i<arr.length;i++){
        let li=document.createElement("li");
        li.innerText=arr[i];

        li.addEventListener("dblclick", function(){
            li.remove();
        })
        li.setAttribute("class", "task");
        ul.appendChild(li);
    }
}



input.addEventListener("keydown" , function(e){
    // e is the Event Object -> describe event 
    console.log("Event Object -> ", e);
    if(e.key == "Enter"){
        let task=input.value;
        // we can create any html tag by using create Element 
        let li=document.createElement("li");
        li.innerText=task;

        // insert the task in local storage
        arr.push(task);
        let stringArr=JSON.stringify(arr);
        // insert by using setItem -> but first it show be converted in String
        localStorage.setItem("allTask" , stringArr);

        li.addEventListener("dblclick", function(){
            li.remove();
        })
        // set attributr
        li.setAttribute("class", "task");
        ul.appendChild(li);
        input.value="";
    }

})