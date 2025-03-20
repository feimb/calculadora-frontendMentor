const themesinput = document.querySelectorAll('input[name="theme"]')
const indicator = document.querySelector('.indicator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');

window.onload = () => {
    const checkedInput = document.querySelector('input[name="theme"]:checked');
    setTimeout(() => {
        if (checkedInput) {
            switch (checkedInput.id) {
                case "theme1":
                    indicator.style.left = "3px";
                    break;
                case "theme2":
                    indicator.style.left = "22px";
                    break;
                case "theme3":
                    indicator.style.left = "42px";
                    break;
            }
        }
    }, 50)
};
themesinput.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        if (input.value === "1") {
          indicator.style.left = "3px";
        } else if (input.value === "2") {
          indicator.style.left = "22px";
        } else if (input.value === "3") {
          indicator.style.left = "42px";
        }
      }
    });
  });