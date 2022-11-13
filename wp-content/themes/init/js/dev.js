const popmodal = document.querySelector ('.popup2');
const closemodal = document.querySelector ('.close-popup2');

closemodal.addEventListener ('click', e => {
    popmodal.style.display = 'none';
})
document.querySelector ('.btn2').addEventListener ('click', e => {
    popmodal.style.display = 'none';
})
function modaladd12 () {
    popmodal.style.display = 'block';
};

setTimeout (modaladd12, 6000); 