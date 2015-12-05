pos = 1;
function f1() {
    alert("Next Question!");
    window.location.href = ('Fortune2.html');
  }
function f2() {

  if (pos ==1) {
    catButton2.style.top = 110;
    catButton2.style.left = 100;
    pos = 2;
  }
  else if (pos ==2) {
    catButton2.style.top =200;
    catButton2.style.left = 50;
    pos = 3;
  }
  else if (pos ==3) {
    document.getElementById('catButton2').style.visibility = 'hidden';
  }
}
