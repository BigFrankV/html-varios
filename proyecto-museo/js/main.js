const aplicacion = document.querySelector('.api')
const url = 'https://api.imgflip.com/get_memes'
fetch(url)
.then(res => console.log(res))
.then(data => console.log(data))
.catch(err => console.log(err))



function v_loginusuario(){
    var largo_nombre = document.getElementById("loginusuario").value.length;
    if(largo_nombre <3 || largo_nombre >15){
        document.getElementById("texto_loginusuario").innerHTML = "ERROR! Nombre entre 3 y 15 caracteres";
        document.getElementById("texto_loginusuario").style.color = "black";
        document.getElementById("flag_loginusuario").value ="0";
    }else{
        document.getElementById("texto_loginusuario").innerHTML = "correcto";
        document.getElementById("texto_loginusuario").style.color = "black";
        document.getElementById("flag_loginusuario").value ="1";}
    
    
}
function v_logincontraseña(){
    var largo_contraseña = document.getElementById("logincontraseña").value.length;
    if(largo_contraseña<6 || largo_contraseña>20){
        document.getElementById("texto_logincontraseña").innerHTML = "ERROR! Contraseña entre 6 y 20 caracteres";
        document.getElementById("texto_logincontraseña").style.color = "black";
        document.getElementById("flag_logincontraseña").value ="0"
    }else{
        document.getElementById("texto_logincontraseña").innerHTML = "correcto"
        document.getElementById("texto_logincontraseña").style.color = "black"
        document.getElementById("flag_logincontraseña").value ="1"
    }
}
function v_crearcuenta(){
    var largo_crearnombre = document.getElementById("crearcuenta").value.length;
    if(largo_crearnombre <3 || largo_crearnombre >15){
        document.getElementById("texto_crearcuenta").innerHTML = "ERROR! Nombre entre 3 y 15 caracteres";
        document.getElementById("texto_crearcuenta").style.color = "black";
        document.getElementById("flag_crearcuenta").value ="0";
    }else{
        document.getElementById("texto_crearcuenta").innerHTML = "correcto";
        document.getElementById("texto_crearcuenta").style.color = "black";
        document.getElementById("flag_crearcuenta").value ="1";}
    
    
}
function v_crearcontraseña1(){
    var largo_crearcontraseña1 = document.getElementById("crearcontraseña1").value.length;
    if(largo_crearcontraseña1 <6 || largo_crearcontraseña1 >20){
        document.getElementById("texto_crearcontraseña1").innerHTML = "ERROR! Contraseña entre 6 y 20 caracteres";
        document.getElementById("texto_crearcontraseña1").style.color = "black";
        document.getElementById("flag_crearcontraseña1").value ="0";
    }else{
        document.getElementById("texto_crearcontraseña1").innerHTML = "correcto";
        document.getElementById("texto_crearcontraseña1").style.color = "black";
        document.getElementById("flag_crearcontraseña1").value ="1";}
    
    
}
function v_crearcontraseña2(){
    var largo_crearcontraseña2 = document.getElementById("crearcontraseña2").value.length;
    if(largo_crearcontraseña2 <6 || largo_crearcontraseña2 >20){
        document.getElementById("texto_crearcontraseña2").innerHTML = "ERROR! Contraseña entre 6 y 20 caracteres";
        document.getElementById("texto_crearcontraseña2").style.color = "black";
        document.getElementById("flag_crearcontraseña2").value ="0";
    }else{
        document.getElementById("texto_crearcontraseña2").innerHTML = "correcto";
        document.getElementById("texto_crearcontraseña2").style.color = "black";
        document.getElementById("flag_crearcontraseña2").value ="1";}
    
    
}
function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }