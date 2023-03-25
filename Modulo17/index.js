let marker, map;

function initMap() {
    const posicion = {
        lat: 2.61230440,
        lng: -75.6142911
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker( {
        position: posicion,
        map,
        title: "Posicion inicial"
    })

    marker2 = new google.maps.Marker( {
        position: {
            lat: 4.865538,
            lng: -74.047189
        },
        map,
        title: "Posicion segunda"
    })
    marker3 = new google.maps.Marker( {
        position: {
            lat: 11.245007,
            lng: -74.214678
        },
        map,
        title: "Posicion segunda"
    })

    //marker.setPosition
    //obtener la geolalizacion
    geoPosiciona()
    
}

function geoPosiciona() {
    if(navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout:60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocaliacion")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("se ha producido un error y lo hemos gestionado")
    console.error(error)
}