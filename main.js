const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".pass-input");
const button = document.querySelector(".signin-button");
const userAlert = document.querySelector(".username-msg");
const passAlert = document.querySelector(".password-msg");
const signAlert = document.querySelector(".signin-status");

button.addEventListener("click", function(e) {

    let userValue = userInput.value;
    let passValue = passInput.value;

    (!(userValue.includes(".com")) || !(userValue.includes("@"))) ? (userAlert.innerText = "Invalid username!", userAlert.style.color = "#e55050") : (userAlert.innerHTML = "Valid", userAlert.style.color = "#00db49");

    if ((passValue.toLowerCase() === passValue) || (passValue.length < 8)) {
        passAlert.innerText = "Password must have at least 8 characters and 1 uppercase letter!";
        passAlert.style.color = "#e55050";
    } else if ((passValue.toLowerCase() !== passValue) && (passValue.length >= 8)) {
        passAlert.innerText = "Valid";
        passAlert.style.color = "#00db49";
    };

    if(userAlert.innerText.length === 5 && passAlert.innerText.length === 5) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: userValue,
                body: passValue,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                signAlert.innerText = "You signed in succsessfully!";
                console.log(json);
            });
    } else {
        signAlert.innerText = "";
    };
}); 