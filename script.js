const optionPrices = {
  1: 195.00,
  2: 345.00,
  3: 528.00
};

function selectOption(selected) {
  document.querySelectorAll(".option").forEach(option => {
    option.classList.remove("active");
  });

  document.getElementById(`pair${selected}`).checked = true;
  document.getElementById(`pair${selected}`).closest('.option').classList.add("active");

  let total = selected === 2 ? 360.00 : optionPrices[selected];
  document.getElementById("total").innerHTML = `Total : <strong>DKK ${total.toFixed(2)}</strong>`;
}

window.onload = () => selectOption(2);
