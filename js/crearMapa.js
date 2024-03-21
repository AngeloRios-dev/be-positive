
// Coordenadas de MasterD 40.44144896361136, -3.6974367192803816

// Check if the browser supports geolocation
if ('geolocation' in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
  
        // Set the office location coordinates
        const officeLocation = {
          lat: 40.44144896361136,
          lng: -3.6974367192803816,
        };
  
        // Create a map instance
        const map = L.map('map').setView([userLocation.lat, userLocation.lng], 13);
  
        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        // Add a marker for the user's location
        L.marker([userLocation.lat, userLocation.lng]).addTo(map).bindPopup('Your Location');
  
        // Add a marker for the office location
        L.marker([officeLocation.lat, officeLocation.lng]).addTo(map).bindPopup('Office Location');
  
        // Calculate the route between the user's location and the office location
        const route = L.Routing.control({
          waypoints: [
            L.latLng(userLocation.lat, userLocation.lng),
            L.latLng(officeLocation.lat, officeLocation.lng),
          ],
          routeWhileDragging: false,
          geocoder: L.Control.Geocoder.nominatim(),
          lineOptions: {
            styles: [
             { color: 'blue', opacity: 0.6, weight: 5 },
            ],
          },
        }).addTo(map);
  
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  
  } else {
    console.error('Geolocation is not supported by your browser.');
  }


