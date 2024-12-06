
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;
        const isOpen = dropdownContent.style.display === 'block';
        
       
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
        
        
        dropdownContent.style.display = isOpen ? 'none' : 'block';
    });
});


window.addEventListener('click', event => {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});

document.getElementById('subscribeBtn').addEventListener('click', function () {
    window.location.href = 'subscribe.html';
});
