const btn = document.querySelector('#btn');
const input = document.querySelector('#password');
const input2 = document.querySelector('#user');
const icon = document.querySelector('#icon');
const login = document.querySelector('#log');

btn.addEventListener('click',()=> {
    if ( input.type === "password") {
        input.type = "text"
        icon.src="images/invisible.png"
    } else {
        input.type = "password"
        icon.src="images/eye.png"
    }

    
})

login.addEventListener('click',()=> {
    
    input.value="";
    input2.value="";
})
