function gerarFibonacci(limite) {
  let sequencia = [0, 1];
  let i = 1;

  while (true) {
    let proximo = sequencia[i] + sequencia[i - 1];
    if (proximo > limite) break;
    sequencia.push(proximo);
    i++;
  }

  return sequencia;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-fib");
  const limiteInput = document.getElementById("limite");
  const saida = document.getElementById("saida");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const limite = parseInt(limiteInput.value, 10);

    if (isNaN(limite) || limite < 0) {
      saida.textContent = "❌ Digite um número limite válido (≥ 0).";
      console.log("Número limite inválido");
      return;
    }

    const sequencia = gerarFibonacci(limite);

    // Mostrar no console
    console.log(`Sequência Fibonacci até ${limite}:`);
    console.log(sequencia.join(", "));

    // Mostrar na tela
    saida.textContent = sequencia.join(", ");
  });
});
