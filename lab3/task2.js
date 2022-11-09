// 11.  тон у центнери(1 тонна ==  10 ц)

function Converter(a) {
    if (a<0) {
        document.write("False")
    }
    valNum = parseFloat(a);
     document.getElementById("outputCelsius").innerHTML = (a)*10;
  }


