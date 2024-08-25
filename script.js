let map;

document.addEventListener('DOMContentLoaded', function () {
    // Alustetaan kartta staattisena kuvana
    map = L.map('map', {
        center: [62.2416, 25.7209], // Keskitetään enemmän Keski-Suomeen
        zoom: 7, // Zoomataan hieman kauemmas
        zoomControl: true, // Alustetaan zoom-napit mutta piilotetaan ne CSS:llä
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false,
        touchZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

function initializeMap() {
    // Muutetaan kartta interaktiiviseksi
    map.scrollWheelZoom.enable();
    map.doubleClickZoom.enable();
    map.dragging.enable();
    map.touchZoom.enable();
    map.zoomControl.enable();
    document.getElementById('map').classList.add('interactive');
    alert("Kartta on nyt interaktiivinen!");
}
