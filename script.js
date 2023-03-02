const btn = document.querySelector('#btn');
const input = document.querySelector('#password');
const icon = document.querySelector('#icon');
btn.addEventListener('click',()=> {
    if ( input.type === "password") {
        input.type = "text"
        icon.src="images/invisible.png"
    } else {
        input.type = "password"
        icon.src="images/eye.png"
    }

    
})