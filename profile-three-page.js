// langauge array
let languages = [
  { lang: "arabic", foto: "./foto/flags/arab.png" },
  { lang: "english", foto: "./foto/flags/england.png" },
  { lang: "italian", foto: "./foto/flags/italy.png" },
  { lang: "polish", foto: "./foto/flags/poland.png" },
  { lang: "swedish", foto: "./foto/flags/sweden.png" }
];

// droupdown  variables
let selectbox = document.querySelector(".select-box");
let selectoption = document.querySelector(".select-option");
let sovalue = document.querySelector("#sovalue");
let options = document.querySelector(".options");
let optionslist = document.querySelectorAll(".options li");
// droupdown functions

/// fucntion create selectmenu
let createSelectMenu = async () => {
  let sovalue = document.querySelector("#sovalue");
  let arroption = [];

  languages.forEach((element, index) => {
    let li = document.createElement("li");
    let imgs = document.createElement("img");
    imgs.className = "flag";
    imgs.src = element.foto;
    li.dataset.name = element.lang;
    li.textContent = element.lang;
    li.dataset.number = index + 1;
    options.append(li);
    li.prepend(imgs);

    let charaterNumber = index + 1;
    arroption.push(li);

    li.addEventListener("click", () => {
      sovalue.value = li.dataset.name;
      selectbox.classList.remove("active");
    });
  });
  /// dropdown-function

  selectoption.addEventListener("click", () => {
    selectbox.classList.toggle("active");
  });
};
createSelectMenu();
let inputvalue = document.querySelector("#sovalue").value;
console.log(inputvalue);
