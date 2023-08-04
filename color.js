let colorpickercontainerElement = document.getElementById("colorpickercontainer");
let selectedColorHexcodeElement = document.getElementById("selectedColorHexcode");

function changebgToGreyAndUpdatetext() {
    colorpickercontainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexcodeElement.textContent = "#e0e0e0";
}

function changebgToGreenAndUpdatetext() {
    colorpickercontainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexcodeElement.textContent = "#6fcf97";
}

function changebgToBlueAndUpdatetext() {
    colorpickercontainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexcodeElement.textContent = "#56ccf2";
}

function changebgToPurpleAndUpdatetext() {
    colorpickercontainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexcodeElement.textContent = "#bb6bd9";
}