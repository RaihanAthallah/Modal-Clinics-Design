function initMap() {
  var coordinates = { lat: -6.1872, lng: 106.8322 }; //koordinat letak
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: coordinates,
  });
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  });
}

function copyFunction() {
  const copyText = document.getElementById("contact").textContent;
  console.log(copyText);
  navigator.clipboard.writeText(copyText);
  alert("Nomor Telepon Telah Dicopy: " + copyText);
}
