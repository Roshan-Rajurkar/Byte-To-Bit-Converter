const byte = document.getElementById("byte");
const bit = document.getElementById("bit");

// byte to bit
function evaluateBit() {
  let B = this.value;
  B = Number.parseInt(B); // input is always in string so need to convert into Number
  let b = B * 8;
  bit.value = b;
}
byte.addEventListener("input", evaluateBit);

// bit to byte
function evaluateByte() {
  let b = this.value;
  b = Number.parseInt(b); // input is always in string so need to convert into Number
  let B = b / 8;
  byte.value = B;
}
bit.addEventListener("input", evaluateByte);
