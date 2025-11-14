const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.style.width = Math.floor(container.offsetWidth / 16) + 'px';
    squareDiv.style.height = squareDiv.style.width;
    container.appendChild(squareDiv);
}