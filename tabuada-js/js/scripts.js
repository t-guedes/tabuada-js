// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-table span")

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""; /* apaga o que tava antes*/

  for (i = 0; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();
    const hmtTemplate = parser.parseFromString(template, "text/html");
    const row = hmtTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return; /* Validação*/

  createTable(multiplicationNumber, multiplicatorNumber);
});
