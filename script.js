// COPIAR DATOS
function copiarDatos(){
  navigator.clipboard.writeText(`
Nombre: Benjamín Andrés Ramírez
Banco: Banco BCI
Tipo: Cuenta Prima
N° Cuenta: 475900271
RUT: 22.040.503-6
Email: BENJARAMIREZG7@GMAIL.COM
  `);

  alert("📋 Datos copiados al portapapeles");
}

// CONTADOR ANIMADO
let contador = document.getElementById("contador");
let i = 0;

let intervalo = setInterval(() => {
  i += 7;
  contador.textContent = i;

  if(i >= 500){
    clearInterval(intervalo);
  }
}, 25);