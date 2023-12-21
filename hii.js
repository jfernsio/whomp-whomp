if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Success callback
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        function(error) {
            // Error callback
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.error("The request to get user location timed out.");
                    break;
                default:
                    console.error("An unknown error occurred.");
            }
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}
console.log('heheh');
console.log('Got ur Ass');