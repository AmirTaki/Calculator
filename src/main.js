let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')


let string = ""
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == "="){
            string = eval(string);
            input.value = string    
        }
    
        string += event.target.innerHTML;
        input.value = string

    })
})