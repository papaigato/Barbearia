function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById('location').innerHTML = 'Geolocalização não é suportada por este navegador.';
    }
  }
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    const locationDiv = document.getElementById('location');
    locationDiv.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
  }
  
  function showError(error) {
    let message = '';
  
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = 'Permissão de localização negada pelo usuário.';
        break;
      case error.POSITION_UNAVAILABLE:
        message = 'As informações de localização não estão disponíveis.';
        break;
      case error.TIMEOUT:
        message = 'O pedido para obter a localização do usuário expirou.';
        break;
      case error.UNKNOWN_ERROR:
        message = 'Ocorreu um erro desconhecido ao obter a localização.';
        break;
    }
  
    document.getElementById('location').innerHTML = `Erro: ${message}`;
  }
  