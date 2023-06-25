function assignhex() {
  let s = "#";
  const str = "0123456789abcdef";

  for (let i = 1; i <= 32; i++) {
    for (let j = 0; j < 6; j++) {
      let temp = Math.floor(Math.random() * 16);
      s += str[temp];
    }
    let boxel = document.getElementsByClassName(`box${i}`)[0];
    console.log(boxel);
    boxel.textContent = s;

    boxel.style.backgroundColor = s;
    s = "#";
  }
}
assignhex();
