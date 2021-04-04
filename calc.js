
const display = document.getElementById('display');

const addChar = chr => {
if (display.innerHTML.includes('.') && chr == '.' ) 
return

    if(display.innerHTML == 0) {
        display.innerHTML = chr
    }
    else {
        display.innerHTML += chr;
    }
    
}


const equalTo = () => {    
display.innerHTML = eval(display.innerHTML)
}

const clearAll = () => {
    display.innerHTML = '0'
}

const clearChr = () => {
    display.innerHTML = display.innerHTML.substring(0 , display.innerHTML.length - 1) 
}