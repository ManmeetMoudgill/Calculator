let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText ='*';/* convert x into * format  */
            screenValue+=buttonText;
            console.log(screenValue)  /* This line of code get the string of what we typing in screen */
            screen.value+=buttonText;
        }else if(buttonText=='C'){
            screenValue='';
            screen.value=screenValue;
        }else if(buttonText=='='){
            screen.value=eval(screenValue);
        }else if(buttonText=='AC'){
           screenValue=screenValue.slice(0,-1);
           screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
           
            
        }
    })
}
