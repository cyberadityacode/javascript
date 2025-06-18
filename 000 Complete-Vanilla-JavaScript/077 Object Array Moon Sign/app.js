console.log("moon sign prediction");

const jsonResponse = {
  statusCode: 200,
  output: {
    0: {
      name: "Ascendant",
      isRetro: "false",
      current_sign: 4,
      house_number: 1,
    },
    1: {
      name: "Sun",
      isRetro: "false",
      current_sign: 1,
      house_number: 10,
    },
    2: {
      name: "Moon",
      isRetro: "false",
      current_sign: 5,
      house_number: 2,
    },
    3: {
      name: "Mars",
      isRetro: "false",
      current_sign: 5,
      house_number: 2,
    },
    4: {
      name: "Mercury",
      isRetro: "true",
      current_sign: 5,
      house_number: 2,
    },
    5: {
      name: "Jupiter",
      isRetro: "false",
      current_sign: 1,
      house_number: 10,
    },
    6: {
      name: "Venus",
      isRetro: "false",
      current_sign: 12,
      house_number: 9,
    },
    7: {
      name: "Saturn",
      isRetro: "true",
      current_sign: 8,
      house_number: 5,
    },
    8: {
      name: "Rahu",
      isRetro: "true",
      current_sign: 9,
      house_number: 6,
    },
    9: {
      name: "Ketu",
      isRetro: "true",
      current_sign: 3,
      house_number: 12,
    },
    10: {
      name: "Uranus",
      isRetro: "true",
      current_sign: 8,
      house_number: 5,
    },
    11: {
      name: "Neptune",
      isRetro: "true",
      current_sign: 8,
      house_number: 5,
    },
    12: {
      name: "Pluto",
      isRetro: "true",
      current_sign: 3,
      house_number: 12,
    },
  },
};

console.log(jsonResponse.output);

// I want to get moon details i.e, current sign and house number and if its retro

// Returns an array of key-value pairs as sub-arrays.
/* const keys = Object.entries(jsonResponse.output);

console.log(keys);
 */

const zodiacSigns = {
  1: "Aries",
  2: "Taurus",
  3: "Gemini",
  4: "Cancer",
  5: "Leo",
  6: "Virgo",
  7: "Libra",
  8: "Scorpio",
  9: "Sagittarius",
  10: "Capricorn",
  11: "Aquarius",
  12: "Pisces",
};
const moon = Object.values(jsonResponse.output).find(
  (item) => item.name === "Moon"
);
console.log(moon);

// Moon details to be displayed in page

if (moon) {
  const moonDetailsDiv = document.querySelector("#moonDetails");
  const retroStatus = moon.isRetro === "true" ? "Yes" : "No";

  const zodiacSign = zodiacSigns[moon.current_sign] || "Unknown";

  moonDetailsDiv.innerHTML = `
    <h1> Moon Sign Prediction</h1>
    <p><strong>House Number:</strong> ${moon.house_number}</p>
    <p><strong>Retrograde:</strong> ${retroStatus}</p>
    <p><strong>Zodiac Sign:</strong> ${zodiacSign} (${moon.current_sign})</p>
  `;
} else {
  console.error("Moon Data not found");
}
