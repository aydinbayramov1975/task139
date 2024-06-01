let input=document.querySelector("input")

let p=document.querySelector("p")

input.addEventListener("input",()=>{
    p.innerHTML=input.value
})

//2

let p1=document.querySelector("p")
let p2=document.querySelector("button")

p2.addEventListener("click",function () {
    let i=document.createElement("li")
i.innerHTML="HELLO"
p1.append(i)
})

//3


let p3=document.querySelector(".red")

let p5=document.querySelector(".GREEN")

let p7=document.querySelector(".PURPLE")

let p9=document.querySelector(".ORANGE")
let p10=document.querySelector("h1")

p3.addEventListener("click",function(){
    p10.style.backgroundColor="red"
})

p5.addEventListener("click",function(){
    p10.style.backgroundColor="GREEN"
})

p7.addEventListener("click",function(){
    p10.style.backgroundColor="PURPLE"
})

p9.addEventListener("click",function(){
    p10.style.backgroundColor="ORANGE"
})