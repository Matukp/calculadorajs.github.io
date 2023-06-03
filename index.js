const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const themeTogglerBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');


let isDark= true; 

themeTogglerBtn.onclick=()=>{
    calculator.classList.toggle('dark');
    themeTogglerBtn.classList.toggle('active');
    isDark=!isDark;
}





buttons.forEach((item)=>{
    item.onclick=() => {
        if(item.id =="clear"){
            display.innerText="";
        }else if(item.id ==="<"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1);
        }else if(display.innerText !==""&& item.id==="equal"){
            display.innerText= eval(display.innerText);
        }else if(display.innerText ==="" && item.id==="equal"){
            display.innerText =" Null";
            setTimeout(()=>(display.innerText=""),2000);
        }else{
            display.innerText+=item.id;
        }
    }
});