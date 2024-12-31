document.addEventListener("DOMContentLoaded", function() {
    console.log("Commands page loaded!");

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
