document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('msg-enviado').textContent = "Mensaje enviado. ¡Gracias por contactarme!";
  this.reset();
});
