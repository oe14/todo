import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const label = this.closest("label");
            if (this.checked) {
                label.style.textDecoration = "line-through";
                label.style.color = "black";
            } else {
                label.style.textDecoration = "none";
                label.style.color = "black";
            }
        });
    });
});
