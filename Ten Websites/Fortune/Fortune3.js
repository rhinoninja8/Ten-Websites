pos = 1;
function f1() {
    alert("Your fortune shall be decided!");
    window.location.href = ('Fortune4.html');
  }
function f2() {

  if (pos ==1) {
    terrButton2.style.top = 300;
    terrButton2.style.left = 10;
    pos = 2;
  }
  else if (pos ==2) {
    terrButton2.style.top =100;
    terrButton2.style.left = 340;
    pos = 3;
  }
  else if (pos ==3) {
    document.getElementById('terrButton2').style.visibility = 'hidden';
  }
}
