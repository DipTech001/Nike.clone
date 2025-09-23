function Mouseover() {
document.querySelector('.section-one').addEventListener('mouseover', function() {
document.querySelector('.section-two').style.display = 'grid';
document.querySelector('.section-two').classList.add('animate');
})
}
function Mouseout() {
document.querySelector('.section-one').addEventListener('mouseout', function() {
document.querySelector('.section-two').style.display = 'none';
document.querySelector('.section-two').classList.add('hidden');
})
}

Mouseover();
Mouseout();