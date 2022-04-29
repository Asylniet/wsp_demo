errors = [false, false];
let button = document.querySelector('button');

function buttonCheck() {
    if(errors[0] == true && errors[1] == true) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

window.addEventListener('load', function() {

    document.getElementById('login').addEventListener('input', function() {
        if (document.getElementById('login').value.length > 0) {
            errors[0] = true;
        } else {
            errors[0] = false;
        }

        buttonCheck();
    });

    document.getElementById('password').addEventListener('input', function() {
        if (document.getElementById('password').value.length > 0) {
            errors[1] = true;
        } else {
            errors[1] = false;
        }

        buttonCheck();
    })

    document.querySelector('.eye').addEventListener('mousedown', function() {
        document.getElementById('eye').setAttribute('src', '/assets/icons/eye-open.svg');
        document.getElementById('password').setAttribute('type', 'text');
    });
    
    document.querySelector('.eye').addEventListener('mouseup', function() {
        document.getElementById('eye').setAttribute('src', '/assets/icons/eye-closed.svg');
        document.getElementById('password').setAttribute('type', 'password');
    });
})