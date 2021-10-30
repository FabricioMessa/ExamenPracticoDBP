document.getElementById("btn_registrarse").addEventListener("click", register);
document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchopage);
var contenedor__login__register = document.querySelector(".contenedor_login-register");
var formulario__login = document.querySelector(".formulario_login");
var formulario__register = document.querySelector(".formulario_register");
var caja__trasera__login = document.querySelector(".caja_Trasera_login");
var caja__trasera__register = document.querySelector(".caja_Trasera_register");

function anchopage(){
    if(window.innerWidth > 850){
        caja__trasera__login.style.display = "block";
        caja__trasera__register.style.display = "block";
    }
    else{
        caja__trasera__register.style.display = "block";
        caja__trasera__register.style.opacity = "1";
        caja__trasera__login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__register.style.display = "none";
        contenedor__login__register.style.left = "0";
    }
}

anchopage();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario__register.style.displey = "none";
        contenedor__login__register.style.left = "10px";
        formulario__login.style.displey = "block";
        caja__trasera__register.style.opacity = "1";
        caja__trasera__login.style.opacity = "0";
    }
    else{
        formulario__register.style.displey = "none";
        contenedor__login__register.style.left = "0px";
        formulario__login.style.displey = "block";
        caja__trasera__register.style.display = "block";
        caja__trasera__login.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        formulario__register.style.displey = "block";
        contenedor__login__register.style.left = "410px";
        formulario__login.style.displey = "none";
        caja__trasera__register.style.opacity = "0";
        caja__trasera__login.style.opacity = "1";
    }
    else{
        formulario__register.style.displey = "block";
        contenedor__login__register.style.left = "0px";
        formulario__login.style.displey = "none";
        caja__trasera__register.style.display = "none";
        caja__trasera__login.style.display = "block";
        caja__trasera__login.style.opacity = "1";
    }
}
