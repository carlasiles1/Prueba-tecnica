// lógica boton deshabilitado

const checkbox = document.getElementById("checkbox");
const enviar = document.getElementById("boton-enviar");

checkbox.addEventListener("change", function () {
  enviar.disabled = !checkbox.checked;
});

// para guardar el mensaje 

let contactoName= document.getElementById("name");
let contactoEmail= document.getElementById("mail");
let ContactoMensaje= document.getElementById("msg");

enviar.addEventListener("click",function(){
    event.preventDefault();
    
    const contactoUsuario = {
        nombre: contactoName.value,
        email: contactoEmail.value,
        mensaje: ContactoMensaje.value
    };
    
  localStorage.setItem("mensajeRegistrado", JSON.stringify(contactoUsuario));
    alert("¡Mensaje enviadoo!");
    window.location.href = "contacto.html";
})

