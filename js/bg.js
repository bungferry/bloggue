const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const hexColorBtn = document.getElementById('hexBtn');
const bgColor = document.querySelector('body');
const hexCode = document.getElementById('hexColor');

hexColorBtn.addEventListener('click' , function(){
    hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomColor = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[randomColor];
    }
    bgColor.style.backgroundColor = hexColor;
    hexCode.innerHTML = hexColor;
});
