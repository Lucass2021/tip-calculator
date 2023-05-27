const calculateButton = document.querySelector("#calculate");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const total = document.querySelector("#total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;

  const totalValue = billValue * (1 + tipValue / 100);
  total.innerHTML = totalValue.toFixed(2);
}

calculateButton.addEventListener("click", calculateTotal);
