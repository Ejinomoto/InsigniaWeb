// Add event listeners for navigation menu items
document.querySelectorAll('nav li').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // Add active class to the clicked item
        document.querySelectorAll('nav li').forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Add event listener for product tabs
document.querySelectorAll('.product-tabs li').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // Add active class to the clicked item
        document.querySelectorAll('.product-tabs li').forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});