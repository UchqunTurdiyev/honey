window.addEventListener('DOMContentLoaded', function() {

    let bar = document.querySelector('.fa-bars');

    bar.addEventListener('click', function(){
        document.querySelector('nav > ul').classList.toggle('active');
    })

    

    window.addEventListener('scroll',function() {
        let navigation = document.querySelector('nav');
        navigation.classList.toggle('stick',window.scrollY > 0);
    })
    window.addEventListener('scroll', function () {
        let button = document.querySelector('button');
        button.classList.toggle('scrolBtn',window.scrollY > 500);
    })
    button.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })




})