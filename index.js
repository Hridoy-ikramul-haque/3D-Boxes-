const mainBoxContainer = document.getElementById('boxes'); 
const btn = document.getElementById('btn'); 

const boxToggle = () => {
    mainBoxContainer.classList.toggle('bigger');
}
btn.addEventListener('click', boxToggle); 


function createBoxes() {
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            const box = document.createElement('div'); 
            box.classList.add('box'); 
            console.log(box);
            box.style.backgroundPosition=`${-j * 125}px ${-i * 125}px`;
            mainBoxContainer.appendChild(box);
        }
    }
}; 

createBoxes();