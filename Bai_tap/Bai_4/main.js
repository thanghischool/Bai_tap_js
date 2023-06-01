function search(price) {
  price = parseInt(document.getElementById("nhap").value);
  switch (price) {
    case 15000:
      document.write("Nước Suối");
      break;

    case 17000:
      document("Coca cola, 7 up, Cam ép");
      break;

    case 20000:
      document.write("Bò húc");
      break;

    default:
      document.write("Không có giá phù hợp");
      break;
  }
}
