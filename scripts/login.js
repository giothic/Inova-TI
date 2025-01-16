// Referências dos elementos
const signInForm = document.getElementById("sign-in-form");
const signInBtn = document.getElementById("sign-in-btn");
const toggleButton = document.getElementById("toggle-dark-mode");

// Alternar entre modo claro e modo escuro
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Noturno";
});

// Função de login
signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Login realizado com sucesso!");
    window.location.href = "main.html";
});

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    window.location.href = "main.html";
});