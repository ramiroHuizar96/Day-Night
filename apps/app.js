const button = document.querySelector('#button')
const body = document.querySelector('#body')
const header = document.querySelector('#header')

button.addEventListener('click', function(){
     console.log('clickedddd');

    if(button.classList.contains('night')){
        button.classList.remove('night');
        body.classList.remove('night-body')
        body.classList.add('body')
        header.classList.remove('night-header')
    }
    else{
        button.classList.add('night');
        body.classList.add('night-body')
        body.classList.remove('body')
        header.classList.add('night-header')
    }

});