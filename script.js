// COPIAR DATOS
function copiarDatos(){
  navigator.clipboard.writeText(`
Nombre: ORTIZ VICENTE ANDRES FLORES
Banco: Banco itau
Tipo: Cuenta Vista
N° Cuenta: 0223699122
RUT: 22.311.024-k
Email: FLORES.VICENTEANDRES@GMAIL.COM
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
