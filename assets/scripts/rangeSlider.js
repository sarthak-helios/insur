document.addEventListener("DOMContentLoaded", () => {
  quoteAmount = document.getElementById("quoteAmount");
  balanceSlider = document.getElementById("balanceSlider");

  quoteAmount.innerText = `$${balanceSlider.value * 100}`;

  balanceSlider.style.background = `linear-gradient(to right, #6c6af1 ${balanceSlider.value}%, #ccc ${balanceSlider.value}%)`;
});

function changeSlider(e) {
  const balance = e.target.value;
  quoteAmount.innerText = `$${balance * 100}`;

  balanceSlider.style.background = `linear-gradient(to right, #6c6af1 ${e.target.value}%, #ccc ${e.target.value}%)`;
}
