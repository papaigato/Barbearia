const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', loginUser);

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar se o usuário e a senha correspondem (simulação)
  if (username === 'usuario' && password === 'senha') {
    alert('Login bem-sucedido!');
    // Armazenar no Local Storage
    localStorage.setItem('loggedIn', 'true');
    // Redirecionar para outra página após o login
    window.location.replace('dashboard.html');
  } else {
    alert('Usuário ou senha incorretos.');
  }
}
