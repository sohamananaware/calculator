let screen= document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log(buttontext)
        if(buttontext == "*"){
            screenValue += buttontext;
            screen.value = screenValue;
        }
        else if (buttontext == '='){
            screen.value = eval(screenValue); 
        }
        else if (buttontext == 'c'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttontext == 'Del'){
            screenValue = screenValue.slice(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;
        }
    })
}