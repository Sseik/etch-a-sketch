const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.style.width = Math.floor(container.offsetWidth / 16) + 'px';
    squareDiv.style.height = squareDiv.style.width;
    container.appendChild(squareDiv);
}

container.addEventListener('mouseover', (e) => {
    if(e.target.id) return;
    if (e.ctrlKey) e.target.style.backgroundColor = '';
    else e.target.style.backgroundColor = 'black';
})