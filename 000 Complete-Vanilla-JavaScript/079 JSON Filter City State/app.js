console.log("JSON Filter");

const arrayData = [];
const jabalpurData = [];

fetch("in.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    arrayData.push(...data);

    // Example filter: Only entries with city===Jabalpur

    const filteredData = data.filter((item) => item.city === "Jabalpur");
    console.log("Filtered Data", filteredData);

    // saving jabalpur data to different array
    jabalpurData.push(...filteredData);
    console.log("Latitude of Jabalpur:",filteredData[0].lat);
    console.log("Longitude of Jabalpur:",filteredData[0].lng);
    
  })
  .catch((error) => console.error("Error Loading JSON", error));


