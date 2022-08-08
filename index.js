const menu = document.getElementById('menu');
const ham = document.getElementById('ham');
const close = document.getElementById('close');

ham.addEventListener('click', function() {
    menu.classList.toggle("show");
    menu.classList.remove("none");
});

close.addEventListener('click', function() {
    menu.classList.toggle("none");
    menu.classList.remove("show");
})

console.log(menu);