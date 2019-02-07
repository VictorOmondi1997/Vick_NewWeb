let paragraph = document.getElementById('paragraph');
let okButton = document.getElementById('ok-button');

paragraph.style.display = 'none';

okButton.addEventListener('click', function(){
    paragraph.style.display = 'block';
    paragraph.innerText = 'Hello World This is Victor Omondi';
})
