function myFunctionA() {
  var angleA = parseInt(document.getElementById("angleA").value);
  var angleB = parseInt(document.getElementById("angleB").value);
  var angleC = parseInt(document.getElementById("angleC").value);
  var response_a = document.getElementById("response_a");
  if (angleA+angleB+angleC === 180) {
    if (angleA===60&&angleB===60&&angleC===60) {
      response_a.textContent = 'That is an equilateral triangle'
    }
    else if (angleA!=angleB&&angleA!=angleC&&angleB!=angleC) {
      response_a.textContent = 'That is a scalene triangle'
    }
    else {
      response_a.textContent = 'That is an isosceles triangle'
    }
  }
  else {
    response_a.textContent = 'That is not a triangle'
  }
}
