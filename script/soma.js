document.addEventListener("DOMContentLoaded", () => {
  const inputDisplay = document.getElementById("input-display");

  const btns = document.querySelectorAll("button[data-valor]");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const valorBotao = btn.getAttribute("data-valor");
      inputDisplay.value += valorBotao;
    });
  });

  document.getElementById("confirm").addEventListener("click", (event) => {
    event.preventDefault();
    const resultado = eval(inputDisplay.value);
    inputDisplay.value = resultado;
  });
});
