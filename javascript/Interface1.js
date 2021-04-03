var text = document.getElementById("type"),
  i = 0,
  mytext = "ALL";

setTimeout(function test() {
  var typewrite = setInterval(function () {
    text.textContent += mytext[i];

    i++;

    if (i > mytext.length - 1) {
      clearInterval(typewrite);
    }
  }, 150);
}, 0);
var text1 = document.getElementById("type1"),
  j = (j = 0),
  mytext1 = "MATHEMATICAL";

setTimeout(function test1() {
  var typewrite1 = setInterval(function () {
    text1.textContent += mytext1[j];

    j++;

    if (j > mytext1.length - 1) {
      clearInterval(typewrite1);
    }
  }, 150);
}, 600);

var text2 = document.getElementById("type2"),
  y = (y = 0),
  mytext2 = "OPERATION";
setTimeout(function test2() {
  var typewrite2 = setInterval(function () {
    text2.textContent += mytext2[y];

    y++;

    if (y > mytext2.length - 1) {
      clearInterval(typewrite2);
    }
  }, 150);
}, 2500);
