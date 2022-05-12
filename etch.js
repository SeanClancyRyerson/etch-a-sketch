
function createEtch(x){
    const container = document.querySelector('.etch-container');
    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            const block = document.createElement('div');
            block.classList.add('etch-block-blank');
            container.appendChild(block);
        }
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
    createEtch(newSize);
    addEvents();
}

function changeColor(e){
    e.target.style.backgroundColor = "gray";
}

createEtch(16);
addEvents();
