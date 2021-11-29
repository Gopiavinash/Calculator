let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
let buttonText;

for (let button of buttons) {
  button.addEventListener("click", function (e) {
    buttonText = e.target.innerText;

    if (buttonText == "Clear") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "←") {
      screen.value = screen.value.substring(0, screen.value.length - 1);
      screenValue = screen.value;
    } else if (buttonText == "=") {
      try {
        screen.value = eval(screenValue);
      } catch {
        screen.value = "Error!";
      }
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
