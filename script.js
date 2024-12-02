document.addEventListener("DOMContentLoaded", function() {
    // You can add any JavaScript here to enhance your site
    console.log("Commands page loaded!");

    // Example: Highlighting a command when hovered
    const commandItems = document.querySelectorAll('.commands-list li');
    commandItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#e0e0e0';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
});