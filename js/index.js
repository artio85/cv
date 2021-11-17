const nav = document.getElementById("nav");
const btns = nav.getElementsByClassName("btn")

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active_btn");
    current[0].className = current[0].className.replace(" active_btn", "");
    this.className += " active_btn";
  });
}