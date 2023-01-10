let randomNumber;

function generateRandomNumber() {
  randomNumber = Math.round(Math.random() * 10);
}

generateRandomNumber();
let xAttempt = 1;

// Função para o botão
// Função callBack
function handleTryClick(event) {
  event.preventDefault(); // Não faça o padrão (que é recarregar a pagina enviando o formulario)

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = ` Você acertou em ${xAttempt} tentativas! 🎉`;
  }
  // else if (Number(inputNumber.value) < randomNumber) {
  //   document.querySelector(
  //     "#test"
  //   ).innerText = `Quase lá, tente um número maior`;
  // } else if (Number(inputNumber.value) > randomNumber) {
  //   document.querySelector("#test").innerText = `Número alto, tente novamente`;
  // }

  inputNumber.value = "";

  xAttempt++;
}

//Eventos

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
Document.addEventListener(keypress, function (e) {
  if (e.key == -"Enter") {
    handleResetClick();
  }
});

btnTry.addEventListener("click", handleTryClick);

function handleResetClick(e) {
  generateRandomNumber();

  document.querySelector(".screen1").classList.remove("hide");
  document.querySelector(".screen2").classList.add("hide");

  document.querySelector(".screen1");
  xAttempt = 1;
}
//Evento para reiniciar o Jogo
btnReset.addEventListener("click", handleResetClick());
