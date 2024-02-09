const buttons = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    //console.log(e.target.innerHTML);
  });
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
      //console.log(e.target.innerHTML);
    });
  }

  function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    const display = document.getElementById("display");

    if (buttonValue === "=") {
      try {
        display.value = new Function("return " + display.value)();
      } catch (error) {
        display.value = "Error";
      }
    } else if (buttonValue === "C") {
      display.value = "";
    } else {
      display.value += buttonValue;
    }
  }
}
