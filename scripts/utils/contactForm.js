function displayModal() {// eslint-disable-line no-unused-vars
    const modal = document.getElementById('contact_modal');
	modal.style.display = 'block';

    document.getElementById('firstname').focus();
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
}


document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeModal();
    }
});

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    var inputs = document.querySelectorAll('form input');
    inputs.forEach(element => {
        console.log(element.value);
    });
});