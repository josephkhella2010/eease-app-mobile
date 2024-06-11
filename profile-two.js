let textareas = document.querySelectorAll("textarea");

let span = document.querySelector("span");
let maxletter = 200;
textareas.forEach((text) => {
  text.addEventListener("input", (e) => {
    e.target.nextElementSibling.innerHTML = `${e.target.value.length} of ${maxletter}`;
    if (e.target.value.length === maxletter) {
      e.target.maxLength = maxletter;
      e.target.classList.add("active");
      e.target.nextElementSibling.nextElementSibling.classList.add("active");
    } else {
      e.target.nextElementSibling.nextElementSibling.classList.remove("active");
    }
  });
});

/* function addclass(area) {
  span.innerHTML = `${area.value.length} of ${maxletter}`;
  if (textarea.value.length === maxletter) {
    textarea.value = "";
    textarea.maxLength = maxletter;
    textarea.classList.add("active");
  }
} */
