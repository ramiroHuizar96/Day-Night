const button = document.querySelector('#button')

button.addEventListener('click', function(){
     console.log('clickedddd');

    if(button.classList.contains('night')){
        button.classList.remove('night');
    }
    else{
        button.classList.add('night');
    }

});