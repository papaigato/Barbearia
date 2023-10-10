// menu hambuguer
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu_burgue');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.getElementById('top-button').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// formulario

function submitForm(event) {
  event.preventDefault();  // Evita o envio padrão do formulário

  // Informações para o alerta
  const alertMessage = "Contato confirmado, logo enviaremos uma mensagem para você.";
  const confirmButtonText = "Confirmar";

  // Exibe o alerta
  alert(alertMessage);

  // Redireciona para a seção desejada
  window.location.href = "../index.html";
}
