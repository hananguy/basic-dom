function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
document.addEventListener('DOMContentLoaded', () => {

const pageContainer = document.getElementById("container")
for(let i = 0; i < 8; i++)
{
    let box = document.createElement("div")
    box.style.backgroundColor = "black";
    box.style.height = "100px";
    box.style.width = "100px";
    box.style.display = "inline-block"
    box.style.margin = "10px"
    box.classList.add("box")
    box.addEventListener("mouseenter", () =>
    {
        box.style.backgroundColor = getRandomRgbColor();
    })
     box.addEventListener("mouseleave", () =>
    {
        box.style.backgroundColor = "black";
    })
    pageContainer.append(box)
}











})