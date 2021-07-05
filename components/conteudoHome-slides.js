let contador = 1;
setInterval(function () {
  document.getElementById("radioHome" + contador).checked = true;
  contador++;
  if (contador > 4) {
    contador = 1;
  }
}, 4000);
