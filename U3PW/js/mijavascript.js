  
 function limpiar() {
               document.getElementById('mifor').reset();
               document.getElementById('resultado').innerHTML= " ";
               
             
            }

   function sumar(){
              var vari1 = parseFloat(document.getElementById("valor1").value);
              var vari2 = parseFloat(document.getElementById("valor2").value);
             document.getElementById('resultado').innerHTML = vari1+vari2;
            }

   function restar(){
              var vari1 = parseFloat(document.getElementById("valor1").value);
              var vari2 = parseFloat(document.getElementById("valor2").value);
             document.getElementById('resultado').innerHTML = vari1-vari2;
            }

    function dividir(){
              var vari1 = parseFloat(document.getElementById("valor1").value);
              var vari2 = parseFloat(document.getElementById("valor2").value);
             document.getElementById('resultado').innerHTML = vari1/vari2;
            }

   	 function multiplicar(){
              var vari1 = parseFloat(document.getElementById("valor1").value);
              var vari2 = parseFloat(document.getElementById("valor2").value);
             document.getElementById('resultado').innerHTML = vari1*vari2;
            }




