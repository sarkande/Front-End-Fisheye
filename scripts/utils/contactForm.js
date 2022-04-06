function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    document.getElementById("firstname").focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        closeModal();
    }
})