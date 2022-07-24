import { extractNumberValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultText } from "./src/util/numbers.js";

const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractNumberValues(form);

  let result = calculateResult(numberValues);
  let resultText = generateResultText(result);
  output.textContent = resultText;
}

form.addEventListener("submit", formSubmitHandler);
