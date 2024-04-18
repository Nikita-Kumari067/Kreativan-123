
function clearErrors() {
    errors = document.getElementsByClassName("formerror");
    for (item of errors) {
        item.innerHTML = "";

    }
}






function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;


}

function validateForm() {
    let returnVal = true;
    clearErrors();
    let name = document.forms["myform"]["fname"].value;
    if (name.length < 4) {
        setError("name", "Length of name is too short");
        returnVal = false;

    }
    let email = document.forms["myform"]["femail"].value;
    if (email.length > 15) {
        setError("email", "Email length is too long");
        returnVal = false;

    }

    let phone = document.forms["myform"]["fmobile"].value;
    if (phone.length != 10) {
        setError("number", "Phone number should be of 10 digits");
        returnVal = false;

    }
    let password = document.forms["myform"]["fpass"].value;

    if (password != "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}") {
        setError("pass", "Password must have 1 number, 1 special char & 1 alphabet");
        returnVal = false;

    }
    let confpassword = document.forms["myform"]["fcpass"].value;

    if (confpassword != password) {
        setError("cpass", "Password does'nt match");
        returnVal = false;

    }
    return returnVal;





}