// Add event listener to the button
document.querySelector('button').addEventListener('click', () => {
    // Scroll to the menu section
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});