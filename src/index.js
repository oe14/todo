import './style.css';
import pencilIcon from './images/pencil.png';

document.addEventListener("DOMContentLoaded", () => {
    // Check if an image already exists to prevent duplicates
    if (!document.querySelector('.pencil-icon')) {
        const img = document.createElement("img");
        img.src = pencilIcon;
        img.alt = "Edit";
        img.classList.add('pencil-icon'); // Add a class for easier selection

        document.body.appendChild(img); // Append only if it doesn't exist
    }

    // Checkbox logic
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
