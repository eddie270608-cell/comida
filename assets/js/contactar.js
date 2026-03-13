function enviarmensaje(){
    let nombre = document.getElementById("nombre").value;
    
    let correo = document.getElementById("correo").value;
    

    let mensaje = document.getElementById("mensaje").value;
    
    if(!nombre || !correo || !mensaje){
        //alert("faltan datos")
     Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error Faltan Datos!!"
            
        });

    }
else{
    alert("Su mensaje a sido enviado")
}


}

