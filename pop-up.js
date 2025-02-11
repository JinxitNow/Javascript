document.addEventListener('DOMContentLoaded', function(){
    const modal = document.getElementById('discountModal');
    const closeButton = document.getElementById ('closeButton');
    const form = document.getElementById('discountForm');
    const emailInput = document.getElementById('emailInput');

    function openModal(){
        modal.style.display = 'block';

    }

    function closeModal(){
        modal.style.display = 'none';

    }

    setTimeout(openModal, 1500);

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal){
            closeModal();
        }
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const email = emailInput.value;
        alert(`A 15% discount code has been sent to ${email}.`);
        closeModal();
    });
});