
    const modal = document.getElementById('discountModal');
    const closeButton = document.getElementById ('closeButton');
    const form = document.getElementById('discountForm');
    const emailInput = document.getElementById('emailInput');

    const discountCodes = ["DISCOUNT15", "WELCOME10", "FREESHIP"];

    for (let i = 0; i < discountCodes.length; i++){
        console.log(`Tilgængelig rabatkode: ${discountCodes[i]}`);
    }

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

        const price = 100;
        const discount = 15;
        const newPrice = price - (price * (discount / 100));
        console.log(`Den nye pris efter rabat er ${newPrice} kr.`);

        const user = {
            email: email,
            discountUsed: false
        };

        console.log(`Brugerens e-mail: ${user.email}`);
        console.log(`Har brugeren brugt rabatten? ${user.discountUsed}`);

        alert(`A 15% discount code has been sent to ${email}.`);
        closeModal();

    });