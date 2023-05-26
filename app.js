let seconds = document.getElementById("cocond");
let minoto = document.getElementById("minoto");
let stops = document.querySelector(".stops")
let clear = document.querySelector(".clear")
let menu = document.querySelector(".menu");
let dark = document.querySelector(".dark");

let second = 0;
let minute = 0;
let btn_start = document.querySelector(".start").addEventListener("click",()=>{
    const secondInter = setInterval(function(){
      second++;
      if(second === 60){
        minute++;
        second =0
        minoto.innerHTML = minute;
      }
    seconds.innerText = second;
   if(minute == 60){
hour++;
minute = 0
let oras = document.querySelector(".oras").innerHTML = hour;
   }
    },100)
   stops.addEventListener("click",()=>{
        clearInterval(secondInter);
       
    })
 clear.addEventListener("click",()=>{
 clearInterval(secondInter);
 seconds.innerHTML ="00";
 minoto.innerHTML = "00";
 minute =0;
 second =0;
    
    
  })
})
function ShowMenu(){
menu.classList.toggle("ActiveMenue");
}
dark.addEventListener("click",()=>{
 let container = document.querySelector(".container").classList.toggle("dark");
 let setting = document.querySelector(".setting").classList.add("chengeSetting")
})

