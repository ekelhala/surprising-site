window.addEventListener("load", (event) => {
    const startButton = document.getElementById("start-button");
    const loginButton = document.getElementById("login-button");
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    startButton.addEventListener("mouseenter", (event) => {
        const newX = Math.floor(Math.random() * 100);
        const newY = Math.floor(Math.random() * 100)
        startButton.style.left = `${newX}%`;
        startButton.style.top = `${newY}%`;
    })
    loginButton.addEventListener("mouseenter", (event) => {
        if(loginButton.style.justifySelf==="end") {
            loginButton.style.justifySelf = "start";
        }
        else {
            loginButton.style.justifySelf = "end";
        }
    })
})

let activeSelector = null;

const selectNumber = (number) => {
    document.getElementById(`d-${activeSelector}`).innerHTML = `${number}`;
}

const setSelector = (id) => activeSelector = id;
