function parallax_height() {
    var scroll_top = $(window).scrollTop();
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  
  $(document).ready(function() {
    parallax_height();
    $(window).scroll(function() {
      parallax_height();
    });
    $(window).resize(function() {
      parallax_height();
    });
  });
  
  
  
  
  
  // Seleciona os elementos
  const toggleButton = document.getElementById('toggle-aside');
  const sidebar = document.querySelector('.sidebar');
  const navbar = document.querySelector('.navbar');
  const body = document.body;  // Captura o body do documento
  const parallaxtext = document.querySelector('.sample-header-section')
  const parallax = document.querySelector('.sample-header');
  const missao = document.querySelector('.sample-section-wrap');
  const fotos = document.querySelector('.collage');
  
  // Adiciona o evento de clique ao botão
  toggleButton.addEventListener('click', function () {
      // Alterna a classe 'active' no sidebar
      sidebar.classList.toggle('active');
      
  
      navbar.classList.toggle('move-right');
      parallaxtext.classList.toggle('move-right');
      parallax.classList.toggle('move-right');
      missao.classList.toggle('move-right');
      fotos.classList.toggle('move-right');
  
      // Verifica se o aside está ativo para bloquear/desbloquear o scroll
      if (sidebar.classList.contains('active')) {
          // Adiciona a classe no-scroll quando o sidebar está aberto
          body.classList.add('no-scroll');
          console.log('Scroll bloqueado'); // Verifica se o scroll foi bloqueado
      } else {
          // Remove a classe no-scroll quando o sidebar está fechado
          body.classList.remove('no-scroll');
          console.log('Scroll desbloqueado'); // Verifica se o scroll foi desbloqueado
      }
  });
  
  
    window.addEventListener('scroll', function() {
      var footer = document.getElementById('footer');
      var scrollPosition = window.scrollY + window.innerHeight;
      var pageHeight = document.documentElement.scrollHeight;
  
      // Checa se o usuário está no final da página (ou muito próximo)
      if (scrollPosition >= pageHeight - 10) {
          footer.style.display = 'block'; // Exibe o footer
      } else {
          footer.style.display = 'none'; // Oculta o footer quando não estiver no final
      }
  });

    // Certifique-se de importar o Firebase antes de qualquer serviço
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDrCRFEp578oqcJm7uzruWe-cbU_ZpZLHo",
    authDomain: "projetofinal-devfront.firebaseapp.com",
    projectId: "projetofinal-devfront",
    storageBucket: "projetofinal-devfront.appspot.com",
    messagingSenderId: "153065613348",
    appId: "1:153065613348:web:95860e84f52477ef6450b1",
    measurementId: "G-079F55DKF5"
};

// Inicializa o Firebase apenas uma vez
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const logo = document.getElementById('logo');

// Função para aplicar o modo noturno
function applyDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    if (isDark) {
        logo.src = "./img/logo-dark.png"; // Logo para o modo escuro
    } else {
        logo.src = "./img/logo-claro.png"; // Logo para o modo claro
    }
}

// Verifica se o modo noturno está ativado no localStorage
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
applyDarkMode(isDarkMode);

// Altera o modo ao clicar no botão
toggleDarkModeBtn.addEventListener('click', function() {
    const isCurrentlyDark = document.body.classList.toggle('dark-mode');
    // Alterar ícone entre lua e sol
    const icon = toggleDarkModeBtn.querySelector('i');
    if (isCurrentlyDark) {
        icon.classList.remove('ri-moon-line');
        icon.classList.add('ri-sun-line');
    } else {
        icon.classList.remove('ri-sun-line');
        icon.classList.add('ri-moon-line');
    }

    // Salva a preferência no localStorage
    localStorage.setItem('dark-mode', isCurrentlyDark);

    // Atualiza a logo
    logo.src = isCurrentlyDark ? "./img/logo-dark.png" : "./img/logo-claro.png";
});
