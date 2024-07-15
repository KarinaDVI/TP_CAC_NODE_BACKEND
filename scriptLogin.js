
function login()
{
let userName=document.getElementById("userName").value;
let password=document.getElementById("password").value;

if(userName=="usuario" &&  password=="contraseña")
    {
        window.location= "carrito.html";
    }

else
    {
        alert("Datos Incorrectos. Usuario No Registrado");
    }
}