function myFunction() {
  var x;
  var a = parseInt(document.getElementById("number-1").value);
  var b = parseInt(document.getElementById("number-2").value);

  if (a == 0) {
    document.getElementById("kq").innerHTML = "Phương trình vô số nghiệm";
  } else if (b == 0) {
    document.getElementById("kq").innerHTML = 0;
  } else {
    document.getElementById("kq").innerHTML = -b / a;
  }
}
