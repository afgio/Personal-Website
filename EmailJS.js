const form = document.querySelector("form");
validated = false;
window.validated = validated;

// EmailJS public key authentication
(function () {
    emailjs.init('b94xJLVeWchw1zbEL');
})();

// Updated form html stored in variable
const checkmark = `<div class='row d-flex justify-content-center align-middle'><div class='col-3 display pe-2 fs-4 green text-end'>Sent</div><div class="col-3 success-animation text-start">
<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div></div>`

// EmailJs send function and html update
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        if (validated) {
            event.preventDefault();
            // Generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // These IDs from the previous steps
            let form = this;
            emailjs.sendForm('service_5cm69qi', 'template_hg4yhzb', this)
                .then(function () {
                    console.log('Email sent');
                    form.innerHTML = checkmark
                    form.style.width = "300px"
                    console.log('Form content updated')
                }, function (error) {
                    console.log('Email failed to send:', error);
                });
        }
    });
}
