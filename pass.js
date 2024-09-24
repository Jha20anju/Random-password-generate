let input = document.getElementById("value");
function generatepass() {
  let char = "ABCDEFG123456789abcdef@#";
  let str = ""
  for (let i = 0; i < 8; i++) {
    let password = Math.floor(Math.random()
    * char.length-1 + 1);
    str += char[password];
  }
   input.value = str; 
}
document.querySelector("genpsword").addEventListener("click", generatepass)

