// Mostrar y ocultar formulario de registro en login

document.getElementById("show-register").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".register-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
});

// lógica del registro

document.querySelector(".register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmar = document.getElementById("reg-confirm-password").value;

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const usuario = {
        nombre,
        email,
        password
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
    alert("¡Registro exitoso!");

    document.querySelector(".register-form").reset();
    document.querySelector(".register-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
});

// lógica del login

document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuario = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (usuario && email === usuario.email && password === usuario.password) {
        alert("Inicio de sesión correcto");
        window.location.href = "/index.html"; 
    } else {
        alert("Email o contraseña incorrectos");
    }
});
