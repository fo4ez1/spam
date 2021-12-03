function spamChecker(str) {
  let checkline = str.toLowerCase();
  let old = str.split(" ");
  let Anew = checkline.split(" ");
  let newline = "";
  for (let i = 0; i < old.length; i++) {
    if (Anew[i] == "spam") old[i] = "***";
    newline += old[i] + " ";
  }
  return newline;
}
let line = prompt("Введите строку");
alert(spamChecker(line));