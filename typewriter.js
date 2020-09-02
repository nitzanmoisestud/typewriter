// "use strict";

window.addEventListener("load", init);

function init() {
  const typeWriter = document.querySelector("#typewriter");
  const typeWriterStr = typeWriter.textContent;
  typeWriter.textContent = "";
  let i;
  let prevText = "";
  const sound = document.getElementById("typekey1");
  let audio = new Audio("typekey1.mp3");

  for (i = 0; i < typeWriterStr.length; i++) {
    let currChar = typeWriterStr.charAt(i);
    addChar(currChar, prevText, typeWriter, i);
  }

  console.log(typeWriterStr);
}

function addChar(currChar, prevText, typeWriter, i) {
  setTimeout(() => {
    console.log(i);
    prevText = typeWriter.textContent;
    typeWriter.textContent = prevText + currChar;
  }, i * 200);
}
