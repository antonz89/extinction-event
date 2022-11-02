let li1 = document.querySelectorAll("#ordered-list li");

// console.log(li);

for ( let i = 0; i<li1.length; i++){
    li1[i].addEventListener("click",function(){
        if(li1[i].style.textDecoration != "line-through"){
            li1[i].style.color = "red";
            li1[i].style.textDecoration = "line-through";
        }else {
            li1[i].style.color = "";
            li1[i].style.textDecoration = "";
        }
    })
}




//-----------------------------------------------
let li2 = document.querySelectorAll("#unordered-list .liFade")

// console.log(li2);

for (let i = 0; i<li2.length; i++){
    li2[i].addEventListener("click",function(){
        if(li2[i].style.opacity != "0.1"){
            li2[i].style.opacity = "0.1";
            li2[i].style.color = "red";
        }else{
            li2[i].style.opacity = "";
            li2[i].style.color = "";
        }
    })
}

//-----------------------------------------------
let img = document.querySelectorAll("#row img");

// console.log(img);

for (let i = 0; i<img.length; i++){
    img[i].addEventListener("click",function(){
     img[i].style.width = "0px";
    })
}

//-----------------------------------------------
let button = document.querySelector("#destroy-all");


button.addEventListener("click",function(){
    for ( let i = 0; i<li1.length; i++){
        if(li1[i].style.textDecoration != "line-through"){
            li1[i].style.color = "red";
            li1[i].style.textDecoration = "line-through";
        }else {
            li1[i].style.color = "";
            li1[i].style.textDecoration = "";
        }
    }
    for (let i = 0; i<li2.length; i++){
        if(li2[i].style.opacity != "0.1"){
                li2[i].style.opacity = "0.1";
                li2[i].style.color = "red";
        }else{
                li2[i].style.opacity = "";
                li2[i].style.color = "";
        }
    }
    for (let i = 0; i<img.length; i++){
        if (img[i].style.width != "0px"){
            img[i].style.width = "0px";
        } else {
            img[i].style.width = "";
        }   
    }   
})








