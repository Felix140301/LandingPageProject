let formToggle = document.getElementById('contact-form-toggle');
let formSection = document.getElementById('contact-form');
let form = document.getElementById('form-content');
let submitButton = document.getElementById('contact-submit');
let thankYouNote = document.getElementById('thank-you-note');

formToggle.addEventListener('click', () => {

    formSection.classList.toggle('flex');
    formSection.classList.toggle('hidden');
    console.log('shown');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();

 });

function submitForm() {
 const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message')
    if(thankYouNote.firstChild!==null){
        thankYouNote.removeChild(thankYouNote.firstChild);
    } else {
    let text = document.createElement('h2');
    text.textContent = `Thank you, ${name}! We have received your message and will get back to you at ${email} soon.`;
    thankYouNote.appendChild(text);
    form.reset();
    }
}

