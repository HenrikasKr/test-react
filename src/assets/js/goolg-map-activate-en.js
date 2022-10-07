function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(38.743782, -9.146811),
        disableDefaultUI: true,
        styles: [
            {
                elementType: 'labels',
                stylers: [{
                    visibility: 'on'
                }]
            },
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#E1E6EE'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ededed'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#D8DDE5'
                }]
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { "visibility": "off" }
                ]
            }
        ]
    });
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(38.743782, -9.146811),
        map: map,
        icon: '../assets/img/marker.png',
        animation: google.maps.Animation.BOUNCE,
    });
}