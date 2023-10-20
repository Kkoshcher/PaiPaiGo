document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="text"], textarea');

    inputs.forEach(input => {
        const label = input.previousElementSibling;
        const icon = document.createElement('span');
        icon.className = 'iconicfill-pen-alt2';
        icon.innerHTML = '&#9998;';
        input.parentNode.insertBefore(icon, input.nextSibling);

        input.addEventListener('focus', function () {
            label.style.left = '100px';
            icon.classList.remove('hide');
            icon.classList.add('show');
        });

        input.addEventListener('blur', function () {
            label.style.left = '10px';
            icon.classList.remove('show');
            icon.classList.add('hide');
            setTimeout(() => {
                icon.classList.remove('hide');
            }, 1000);
        });
    });
});
