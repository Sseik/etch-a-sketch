const INITIAL_DIMENSIONS = 16;

const container = document.querySelector('#container');

function drawGrid(squaresPerSide) {
    container.innerHTML = '';
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.width = 100. / squaresPerSide + '%';
        squareDiv.style.height = squareDiv.style.width;
        container.appendChild(squareDiv);
    }
}

function colorPixel(e) {
    if(e.target.id || e.buttons === 0) return;
    if (e.ctrlKey) {
        e.target.style.backgroundColor = '';
    }
    else { 
        e.target.style.backgroundColor = 
        `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
        let currentOpacity = e.target.style.opacity;
        if (!currentOpacity) e.target.style.opacity = 0.1;
        else if (currentOpacity < 1) {
            e.target.style.opacity = +e.target.style.opacity + 0.1;
        }
    }
    
}

container.addEventListener('mouseover', (e) => {
    colorPixel(e);
})

container.addEventListener('mousedown', (e) => {
    colorPixel(e);
})

const setSizeButton = document.querySelector('button');
setSizeButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt('Enter number of squares per side:'));
    squaresPerSide = squaresPerSide > 100 ? 100 : squaresPerSide;
    if (squaresPerSide && Number.isInteger(squaresPerSide)) drawGrid(squaresPerSide);
})

drawGrid(INITIAL_DIMENSIONS);