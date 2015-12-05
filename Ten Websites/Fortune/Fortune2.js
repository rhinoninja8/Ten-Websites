pos = 1;
function f3() {
    alert("Next Question!");
    window.location.href = ('Fortune3.html');
  }
function f4() {

  if (pos ==1) {
    marButton2.style.top = 50;
    marButton2.style.left = 30;
    pos = 2;
  }
  else if (pos ==2) {
    marButton2.style.top =20;
    marButton2.style.left = 190;
    pos = 3;
  }
  else if (pos ==3) {
    document.getElementById('marButton2').style.visibility = 'hidden';
  }
}
