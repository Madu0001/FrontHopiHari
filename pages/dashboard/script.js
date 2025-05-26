document.addEventListener('DOMContentLoaded', function () {
    const userToken = JSON.parse(localStorage.getItem('token')) || {};
    const userData = JSON.parse(localStorage.getItem('user')) || {};

    if (userToken) {
        document.getElementById('user-name').textContent = `Olá, ${userData.firstName}!`;
        document.getElementById('user-email').textContent = userData.email;
    } else {
        window.location.href = '../login/login.html';
    }

    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('token');
        window.location.href = '/';
    });

    // Toggle do menu lateral (para mobile)
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Fechar menu ao clicar em um item (para mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
    });
});