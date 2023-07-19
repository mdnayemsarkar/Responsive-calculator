var tl = gsap.timeline()

tl.from('.calculator',{
    x:-900,
    duration:1.5,
})

tl.from('h1',{
    y:-300,
    duration:1.5,
})



// from here calcultor js part start 


// Get the calculator display input element
var display = document.getElementById("inputbox");

// Function to update the display value
function updateDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character from the display
function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression and display the result
function calculate() {
  var result = eval(display.value);
  display.value = result;
}

// Attach click event listeners to the buttons
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", function () {
    var value = this.innerHTML;
    if (value === "Ac") {
      clearDisplay();
    } else if (value === "Del") {
      deleteCharacter();
    } else if (value === "=") {
      calculate();
    } else {
      updateDisplay(value);
    }
  });
}
