const link = document.querySelector('a');
const content = document.querySelector('.content');

     link.addEventListener('click', function(){
        if(content.style.display === 'block'){
            content.style.display = 'none';
        }else{
            content.style.display = 'block';
        }
     })