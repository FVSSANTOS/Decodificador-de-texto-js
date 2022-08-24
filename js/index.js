
function criptografar(){

  var value = document.getElementById("texto").value;
  
  value = value.replace("e", "enter");
  value = value.replace("i", "imes");
  value = value.replace("a", "ai");
  value = value.replace("o", "ober");
  value = value.replace("u", "ufat");

  document.getElementById('resultado').value = value;  
}

function descriptografar(){
   
  var value = document.getElementById("texto").value;
  
  value = value.replace("enter","e");
  value = value.replace("imes","i");
  value = value.replace("ai","a");
  value = value.replace("ober","o");
  value = value.replace("ufat","u");

  document.getElementById('resultado').value = value;  
}

function copiar(){
  let copia = document.getElementById('resultado');
  copia.select();
  copia.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
