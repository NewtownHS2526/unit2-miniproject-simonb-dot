// ============================================
// SECTION 1 — Favorite Color Radio Buttons
// ============================================

// Grab all radio buttons in the group
// ⚠️ Make sure the name matches your HTML
const colorRadios = document.querySelectorAll(
  'input[name="favoriteColor"]'
);

// Grab the output div
// ⚠️ Make sure this ID matches your HTML
const radioOutput = document.querySelector('#radio-output');

// Listen for changes on each radio
colorRadios.forEach(radio => {
  radio.addEventListener('change', handleColorChange);
});

function handleColorChange(e) {
  const selectedColor = e.target.value;

  if (selectedColor === 'blue') {
    radioOutput.innerHTML = 'You picked blue 💙';
  } else if (selectedColor === 'green') {
    radioOutput.innerHTML = 'You picked green 💚';
  } else if (selectedColor === 'pink') {
    radioOutput.innerHTML = 'You picked pink 💕';
  } else if (selectedColor === 'black') {
    radioOutput.innerHTML = 'You picked black 🖤';
  }
}

// ============================================
// SECTION 2 — Random Number (uses getRandomInt)
// ============================================

// ⚠️ Update IDs if needed
const numberInput = document.querySelector('#number-input');
const numberOutput = document.querySelector('#number-output');

if (numberInput && numberOutput) {
  numberInput.addEventListener('input', () => {
    const max = Number(numberInput.value);

    if (!isNaN(max) && max > 0) {
      const randomNum = getRandomInt(max);
      numberOutput.innerHTML = `Random number: ${randomNum}`;
    } else {
      numberOutput.innerHTML = '';
    }
  });
}

// ============================================
// SECTION 3 — Text Input (live display)
// ============================================

// ⚠️ Update IDs if needed
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#text-output');

if (textInput && textOutput) {
  textInput.addEventListener('input', e => {
    textOutput.innerHTML = e.target.value;
  });
}

// ============================================
// SECTION 4 — Color Picker + Accessibility
// ============================================

// ⚠️ Update IDs if needed
const colorPicker = document.querySelector('#color-picker');
const colorSection = document.querySelector('#color-section');

if (colorPicker && colorSection) {
  colorPicker.addEventListener('input', e => {
    const hex = e.target.value;
    colorSection.style.backgroundColor = hex;

    if (isDark(hex)) {
      colorSection.style.color = '#ffffff';
    } else {
      colorSection.style.color = '#000000';
    }
  });
}

// ============================================
// SECTION 5 — Checkbox Toggle
// ============================================

// ⚠️ Update IDs if needed
const toggleCheckbox = document.querySelector('#toggle-checkbox');
const toggleTarget = document.querySelector('#toggle-target');

if (toggleCheckbox && toggleTarget) {
  toggleCheckbox.addEventListener('change', e => {
    toggleTarget.style.display = e.target.checked
      ? 'block'
      : 'none';
  });
}

// ============================================
// SECTION 6 — Button Action
// ============================================

// ⚠️ Update IDs if needed
const actionButton = document.querySelector('#action-button');
const buttonOutput = document.querySelector('#button-output');

if (actionButton && buttonOutput) {
  actionButton.addEventListener('click', () => {
    buttonOutput.innerHTML = 'Button clicked 🎉';
  });
}
