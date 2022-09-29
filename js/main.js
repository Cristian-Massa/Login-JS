const usuarioIngresado = document.getElementById("usuarioIngresado");
usuarioIngresado.addEventListener("keyup", usuarioCheck);

const contrasenaIngresada = document.getElementById("contrasenaIngresada");
contrasenaIngresada.addEventListener("keyup", usuarioCheck)

const iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", toggleModal)

const modal = document.getElementById("modal");
const loginScreen = document.getElementById("loginScreen")



function usuarioCheck(){
    let usuarioGuardado = "123";
    let contrasenaGuardada = "123";
    let usuarioCorrecto = false;

    if(usuarioIngresado.value === usuarioGuardado && 
        contrasenaIngresada.value == contrasenaGuardada){
        usuarioCorrecto = true;
    }
    if(usuarioCorrecto === true){
        toggleModal();
        console.log("sicorrecto")
    }
}

function toggleModal(){
    modal.classList.add("toggleModal")
    modal.classList.remove("offModal")
    loginScreen.classList.add("offLogin")
}
