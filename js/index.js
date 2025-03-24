const themesinput = document.querySelectorAll('input[name="theme"]')
const indicator = document.querySelector('.indicator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number');
const delBtn = document.querySelector('.delete-btn');
const operators = document.querySelectorAll('.operator');
const resetBtn = document.querySelector('.reset');
const equal = document.querySelector('.equal');


function cambiarTema (theme){
  document.body.classList.replace(document.body.classList[0], "theme-" + theme);
}
window.onload = () => {
  const theme = localStorage.getItem('theme');
  if(!theme){
    if (!theme) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(isDarkMode){
        localStorage.setItem('theme', '2');
      }else{
        const themaRamdon = Math.floor(Math.random() * 2) + 1;
        if(themaRamdon === 1){
          localStorage.setItem('theme', '1');
        }else{
          localStorage.setItem('theme', '3');
        }
      }
    }
  }
  const storageTheme = localStorage.getItem('theme');
  switch ("theme" + storageTheme) {
    case "theme1":
      indicator.style.left = "3px";
      cambiarTema("1");
      break;
    case "theme2":
      indicator.style.left = "22px";
      cambiarTema("2");
      break;
    case "theme3":
      indicator.style.left = "42px";
      cambiarTema("3");
      break;
  }  
    
};
themesinput.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        if (input.value === "1") {
          indicator.style.left = "3px";
          localStorage.setItem('theme', '1');
          cambiarTema("1");

        } else if (input.value === "2") {
          indicator.style.left = "22px";
          localStorage.setItem('theme', '2');
          cambiarTema("2");

        } else {
          indicator.style.left = "42px";
          localStorage.setItem('theme', '3');
          cambiarTema("3");

        }
      }
    });
});