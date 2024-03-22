// Nivel de zoom con el que comenzara el mapa
const zoom = 15;
// Coordenadas de la ubicacion de MasterD
const masterdLat = 40.44144896361136;
const masterdLng = -3.6974367192803816;

// Crear el mapa
const map = L.map("map").setView([masterdLat, masterdLng], zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Funcion para manejar la obtencion exitosa de la ubicacion del usuario
function success(position) {
  const userLat = position.coords.latitude;
  const userLng = position.coords.longitude;

  // Marcando la ruta
  L.Routing.control({
    waypoints: [
      L.latLng(masterdLat, masterdLng),
      L.latLng(userLat, userLng),
    ],
    routeWhileDragging: true,
    lineOptions: {
      styles: [{ color: "red", opacity: 0.7, weight: 8 }],
    },
  }).addTo(map);
}

// Funcion para manejar errores en la obtencion de la ubicacion del usuario
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  
  // Agregar marcador para la ubicacion de MasterD
  L.marker([masterdLat, masterdLng]).addTo(map)
    .bindPopup('Ubicacion de MasterD');
}

// Verificar si el navegador admite la geolocalizacion
if (navigator.geolocation) {
  // Obtener la ubicacion actual del usuario
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.error('La geolocalizacion no es compatible con tu navegador.');
  
  // Agregar marcador para la ubicacion de MasterD
  L.marker([masterdLat, masterdLng]).addTo(map)
    .bindPopup('Ubicacion de MasterD');
}
