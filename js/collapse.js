const collapse = document.getElementsByClassName("w_title");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      content.style.height = "0%";
    } else {
      content.style.display = "block";
      content.style.height = "100%";
    }
  });
}