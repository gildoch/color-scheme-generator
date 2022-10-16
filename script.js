const modes = document.getElementById('schemes');
const color = document.getElementById('color');
const colorContainer = document.getElementById('colors-container');

const COLOR_API_URI = "https://www.thecolorapi.com";

function renderColors(data) {
  const colorElements = data.map(color => {
    return `
      <div class="color-content" style="background-color:${color.hex.value}">
        <div class="color-visual"></div>
        <div class="color-code">
          ${color.hex.value}
        </div>
      </div>
    `
  }).join("")

  return colorElements;
}

fetch(COLOR_API_URI + "/scheme?hex=24B1E0&mode=triad&count=5").then(res => res.json()).then(data => {
  colorContainer.innerHTML = renderColors(data.colors);
})

document.getElementById('getColor').addEventListener('click', () => {
  let colorInput = color.value.replace("#", "");
  let modeInput = modes.value;

  console.log(colorInput, modeInput)

  fetch(COLOR_API_URI + `/scheme?hex=${colorInput}&mode=${modeInput}&count=5`).then(res => res.json()).then(data => {
    console.log(data.colors);
    colorContainer.innerHTML = renderColors(data.colors);
  })
})