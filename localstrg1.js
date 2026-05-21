
    const CHAVE = "minhaAnotacao";

const textarea = document.getElementById("anotacao");
const btnSalvar = document.getElementById("btnSalvar");
const btnLimpar = document.getElementById("btnLimpar");
const mensagem = document.getElementById("mensagem");

btnSalvar.addEventListener("click", () => {
    const texto = textarea.value;

    localStorage.setItem(CHAVE, texto);

    mensagem.textContent = "Anotação salva!";
});

btnLimpar.addEventListener("click", () => {
    textarea.value = "";

    localStorage.removeItem(CHAVE);

    mensagem.textContent = "Anotação removida!";
});

function carregar() {
    const salvo = localStorage.getItem(CHAVE);

    if (salvo) {
        textarea.value = salvo;
        mensagem.textContent = "Anotação carregada!";
    }
}

carregar();
