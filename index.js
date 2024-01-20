const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");

const openModal = function(){
    if(modal.classList.contains("hidden") && overlay.classList.contains("hidden")){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    }
}

const closeModal = function(){
    if(!modal.classList.contains("hidden") && !overlay.classList.contains("hidden")){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    }
}
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function(e){
    if(e.key === 'Escape'){
        closeModal();
    }
});