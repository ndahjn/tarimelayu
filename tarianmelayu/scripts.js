// Fungsi untuk inisialisasi peta Google Maps
function initMap() {
    // Koordinat Kepulauan Riau
    var kepulauanRiau = { lat: 0.1542, lng: 104.4876 };

    // Buat peta baru dan masukkan ke dalam div dengan id="map"
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: kepulauanRiau
    });

    // Tambahkan marker untuk menandai lokasi Kepulauan Riau
    var marker = new google.maps.Marker({
        position: kepulauanRiau,
        map: map,
        title: 'Kepulauan Riau'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Tarian Melayu siap!");
});

// Tambahkan animasi atau interaksi lainnya di sini jika diperlukan
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Tarian Melayu siap!");
});
