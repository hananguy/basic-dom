document.addEventListener('DOMContentLoaded', () => 
{
    console.log(document)
    document.getElementById("playing-field").style.backgroundColor = "blue"
    const playingField = document.getElementById("playing-field")
    console.log(playingField)
    const down = document.getElementById("down")
    console.log(down)
    console.log(down.innerHTML)
    console.log(playingField.innerHTML)
    const ball = document.getElementById("ball")
    ball.style.backgroundColor = "yellow"
    const createdBy = document.createElement("style");
     createdBy.textContent = 
    `.createdBy {
    color:#27ae60;
    font-family:Helvetica;
    text-shadow: 3px 1px 2px black;
    }
    `;
    document.head.appendChild(createdBy);
    const header = document.createElement("h1")
    header.innerHTML = "The Best Game Ever"
    header.style.color = "#c0392b"
    header.style.fontFamily = "Helvetica"
    document.body.appendChild(header)
    const subHeader = document.createElement("h2");
    subHeader.textContent = "Created by Guy Hanan";
    subHeader.classList.add("createdBy");
    document.body.appendChild(subHeader);
    const container = document.getElementById("container");
    container.style.top = "200px";
    //up left right down
    const upButton = document.getElementById("up")
    const leftButton = document.getElementById("left")
    const rightButton = document.getElementById("right")
    const downButton = document.getElementById("down")
    upButton.addEventListener("click", moveUp);
    leftButton.addEventListener("click", moveLeft);
    rightButton.addEventListener("click", moveRight);
    downButton.addEventListener("click", moveDown);
})
const moveRight = function(){
    let currentLeft = parseInt( window.getComputedStyle(ball).left,10);
    currentLeft += 3;
    ball.style.left = (currentLeft + "px")
}
const moveDown = function()
{
    let currentTop = parseInt( window.getComputedStyle(ball).top,10);
    currentTop += 3;
    ball.style.top = (currentTop + "px")
}
const moveLeft = () => {
  let currentLeft = parseInt( window.getComputedStyle(ball).left,10);
  ball.style.left = (currentLeft - 3) + 'px';
};

const moveUp = () => {
  let currentTop = parseInt( window.getComputedStyle(ball).top,10);
  ball.style.top = (currentTop - 3) + 'px';
};