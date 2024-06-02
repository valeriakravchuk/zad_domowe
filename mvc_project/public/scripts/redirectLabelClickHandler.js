document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelectorAll('.redirect_label').forEach(label => {
        label.addEventListener('click', () => {
            const link = label.nextElementSibling;
            link.click();
        });
    });
});