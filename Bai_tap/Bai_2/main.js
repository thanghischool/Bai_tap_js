function myFunction() {
  var number = parseInt(document.getElementById("nhap").value);

  if (number == 0) {
    document.getElementById("demo").innerHTML = "Bạn bị 0 điểm";
    document.getElementById("demo").style.color = "yellow";
  } else if (number > 0) {
    document.getElementById("demo").innerHTML = "Điểm lớn hơn 0";
    document.getElementById("demo").style.color = "blue";
  } else {
    document.getElementById("demo").innerHTML = "Điểm nhỏ hơn 0";
    document.getElementById("demo").style.color = "green";
  }
}
