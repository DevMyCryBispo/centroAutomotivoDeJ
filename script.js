document.addEventListener('DOMContentLoaded', function() {
  const accessCountElement = document.getElementById('access-count');

  let accessCount = localStorage.getItem('accessCount');

  if (!accessCount) {
    accessCount = 0;
  }

  accessCount++;

  localStorage.setItem('accessCount', accessCount);

  accessCountElement.textContent = accessCount;

  const links = document.querySelectorAll('#social-links a');

  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.classList.add('btn-primary');
    });
    link.addEventListener('mouseleave', function() {
      this.classList.remove('btn-primary');
    });
  });

  
  function initMap() {
    const map = L.map('map').setView([-20.517431, -54.663514], 15); // Latitude e Longitude da localização desejada

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-20.517431, -54.663514]).addTo(map)
      .bindPopup('D & J CENTRO AUTOMOTIVO')
      .openPopup();
  }

  initMap();
});
