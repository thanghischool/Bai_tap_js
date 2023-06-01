function grade(score) {
  if (score >= 0 && score <= 100) {
    if (score > 50) {
      document.write("Pass");
    } else {
      document.write("Fail");
    }
  }
}
