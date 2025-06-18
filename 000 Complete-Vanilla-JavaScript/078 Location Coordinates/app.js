console.log("locationCoordinates");

navigator.geolocation.getCurrentPosition(
    (position)=> {
        const {latitude, longitude} = position.coords;
        document.getElementById("locationCoordinates").innerText = `Latitude : ${latitude} - Longitude : ${longitude}`
    },
    (error)=> {
        document.getElementById("locationCoordinates").innerText = `Error: ${error.message}`;
    }
);
    

/* 
Free APIs to reverse search location

https://opencagedata.com/
https://locationiq.com/pricing

*/