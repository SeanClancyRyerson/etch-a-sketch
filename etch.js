
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

createEtch(16);

function changeColor(e){
    //console.log(e);
}

const blocks = document.querySelectorAll('.etch-block-blank');
blocks.forEach(block => block.addEventListener('mouseover', changeColor, false));

