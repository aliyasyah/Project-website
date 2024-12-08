// document.getElementById('first').addEventListener('toggle', goToggle);

// function goToggle() {
//     document.querySelector('.menu-toggle span:first-child').style.transform = 'rotate(45deg) translate(-1px, -1px)';
//     document.querySelector('.menu-toggle span:last-child').style.transform = 'rotate(-45deg) translate(-1px, 0)';
// }

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigate');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}



