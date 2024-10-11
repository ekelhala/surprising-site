window.addEventListener("load", (event) => {
    const startButton = document.getElementById("start-button");
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    startButton.addEventListener("mouseenter", (event) => {
        const newX = Math.floor(Math.random() * 100);
        const newY = Math.floor(Math.random() * 100)
        startButton.style.left = `${newX}%`;
        startButton.style.top = `${newY}%`;
    })
})