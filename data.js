function createFloatingText() {
    const text = document.createElement("div");
    text.classList.add("floating-text");
    text.textContent = "Luciana";
    text.style.left = Math.random() * 80 + "vw";
    text.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(text);
    setTimeout(() => {
        text.remove();
    }, 5000);
}
setInterval(createFloatingText, 1000);