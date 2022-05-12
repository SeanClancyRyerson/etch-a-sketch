
function createEtch(rows, cols){
    const container = document.querySelector('.etch-container');

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        const block = document.createElement('div');
        block.classList.add('etch-block-blank');
        container.appendChild(block);
    }
}

function deleteOldBlocks(){
    const blocks = document.querySelectorAll('.etch-block-blank');
    blocks.forEach(block => block.remove());
}

function addEvents(){
    const blocks = document.querySelectorAll('.etch-block-blank');
    blocks.forEach(block => block.addEventListener('mouseover', changeColor, false));
}

function resize(){
    let newSize = prompt("Enter a new size");
    while (newSize < 1 || newSize > 100){
        newSize = prompt("Please enter a number between 1 and 100");
    }
    deleteOldBlocks();
    createEtch(newSize, newSize);
    addEvents();
}

function changeColor(e){
    e.target.style.backgroundColor = "gray";
}

createEtch(16,16);
addEvents();
