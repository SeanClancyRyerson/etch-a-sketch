
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

const blocks = document.querySelectorAll('')

createEtch(16);