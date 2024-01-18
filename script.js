//luas
var inputElement = document.getElementById("jumlah");
var clic = document.getElementById("hitung1");
clic.addEventListener("click", function() {
      var nilaiInput = inputElement.value;

      var hasil = nilaiInput * nilaiInput;
      
      var name = document.getElementById("keliling");
      name.innerHTML = "Luas" + hasil;
});

//keliling
var keliling1 = document.getElementById("jumlah1");
var hitung1 = document.getElementById("hitung2");
hitung1.addEventListener("click", function() {
      var keliling2 = keliling1.value;

      var hasil2 = 4 * keliling2;

      var nama = document.getElementById("luas");
      nama.innerHTML = "Keliling " + hasil2;
});