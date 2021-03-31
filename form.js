
const steps = document.querySelectorAll(".step");
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const pages = document.querySelectorAll(".page");
var form = document.querySelector("form").elements;
console.log(form);

function isEmpty(element){
  if(element.value == ""){
    element.setAttribute("style","border:1px solid deeppink");
  }else{
    return false;
  }
}

next[0].addEventListener('click',function(){
  if(isEmpty(form[0])==false && isEmpty(form[1])==false){
    pages[0].style.marginLeft = "-25%";
    steps[0].classList.add("active");
  }
});

prev[0].addEventListener('click',function(){
  pages[0].style.marginLeft = "0%";
  steps[0].classList.remove("active");
});

next[1].addEventListener('click',function(){
  if(isEmpty(form[3])==false && isEmpty(form[4])==false){
    pages[1].style.marginLeft = "-25%";
    steps[1].classList.add("active");
  }
});

prev[1].addEventListener('click',function(){
  pages[1].style.marginLeft = "0%";
  steps[1].classList.remove("active");
  steps[2].classList.remove("active");
});

document.querySelector(".submit").addEventListener('click',function(){
  if(isEmpty(form[7])==false && isEmpty(form[8])==false){
    steps[2].classList.add("active");
    alert("Successfuly form submited");
  }

});
