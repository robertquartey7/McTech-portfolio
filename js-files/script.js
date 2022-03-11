const dateTime = document.getElementById('dateTime');
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');



const date = new Date()
dateTime.innerHTML = date.getFullYear()

toggleButton.addEventListener('click', function(){
    menu.classList.toggle('show')
})