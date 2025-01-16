
// Referências dos elementos
const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const toggleButton = document.getElementById("toggle-dark-mode");
const userNameElement = document.getElementById('user-name'); // Referência ao elemento

// Alternar entre login e cadastro
signUpBtn.addEventListener('click', () => {
    document.querySelector(".container").classList.add("sign-up-mode");
});

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