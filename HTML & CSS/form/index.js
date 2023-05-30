
function validateMail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
        document.getElementById('email').style.borderColor = 'lightgreen';
        //alert("Valid email address!");
        return true;
    }
    else {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('emailErr').innerText = "invalid email";
        return false;
    }
}

function checkPwd(pwd) {
    var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pwd.match(pwdFormat)) {
        document.getElementById('password').style.borderColor = 'lightgreen';
        alert('Password created successfully!!');
        return true;
    } else {
        document.getElementById('password').style.borderColor = 'red';
        alert('Wrong Password Format');
        return false;
    }
}