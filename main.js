const cartaBox = document.querySelector(".cards");
const cartas = document.getElementsByClassName("card");

cartaBox.onmousemove = e => {
    for (const card of cartas) {
        const rect = card.getBoundingClientRect();
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}