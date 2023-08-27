const start=document.getElementById("start");
const reset=document.getElementById("reset");
const stop=document.getElementById("stop");
let text=document.getElementById("text");
let h=0;
let m=0;
let s=0;
let display=null;//for storing the setTimerId;

function watch(){//function to start timer
       s++;
        if(s==60)
        {
            m++;
            s=0;
        }
        if(m==60)
        {
            h++;
            m=0;
        }
        
        text.innerHTML=pads(h)+":"+pads(m)+":"+pads(s);//dispalying timer
        function pads(v){                          //method unit digit preceding with "0";
            return (("0"+v).length>2?v:"0"+v);
        }
        

}
start.addEventListener("click",()=>{

    display=setInterval(watch,1000);//onclicking the start btn this function call every 1 sec
});
reset.addEventListener("click",()=>{//click on reset stop function
    h=0;
    m=0;
    s=0;
    text.innerHTML="00:00:00";
    clearInterval(display);//stopping the interval function
})
stop.addEventListener("click",()=>{
    clearInterval(display);//stop function simply cleartimer()
})