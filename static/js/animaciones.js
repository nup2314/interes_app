(() => {
    'use strict';

    // Anima el título como si se estuviera escribiendo.
    const title = document.querySelector('.typewriter');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (title && !reduceMotion) {
        const finalText = title.dataset.text || title.textContent.trim();
        title.textContent = '';
        title.classList.add('typing-done');
        let index = 0;
        const typeNext = () => {
            if (index < finalText.length) {
                title.textContent += finalText.charAt(index);
                index += 1;
                window.setTimeout(typeNext, finalText.charAt(index - 1) === ' ' ? 35 : 48);
            }
        };
        window.setTimeout(typeNext, 180);
    }

    // Respuesta visual al escribir en el campo de nombre.
    const nameInput = document.querySelector('input[name="nombre"]');
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            nameInput.classList.toggle('is-typing', nameInput.value.length > 0);
        });
    }

    // Evita dobles envíos y anima el botón al enviar el formulario.
    const form = document.querySelector('.interest-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            if (!form.reportValidity()) {
                event.preventDefault();
                return;
            }
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
                button.querySelector('span').textContent = 'Enviando…';
                button.style.opacity = '.8';
            }
        });
    }
})();
