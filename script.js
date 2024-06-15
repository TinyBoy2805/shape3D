let container1 = document.querySelector(".container1");

let bigcube1 = document.querySelector(".bigcube1");
let bigcube2 = document.querySelector(".bigcube2");
let bigcube3 = document.querySelector(".bigcube3");
let bigcube4 = document.querySelector(".bigcube4");
let bigcube5 = document.querySelector(".bigcube5");

bigcube1.addEventListener("click", ()=>
{
    container1.classList.toggle("active");
})

bigcube2.addEventListener("click", ()=>
{
    window.open("cube.html");
})
bigcube3.addEventListener("click", ()=>
{
    window.open("rectangle.html");
})
bigcube4.addEventListener("click", ()=>
{
    window.open("triangle.html");
})
bigcube5.addEventListener("click", ()=>
{
    window.open("cylinder.html");
})
