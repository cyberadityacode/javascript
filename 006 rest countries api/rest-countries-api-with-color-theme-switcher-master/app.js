const countriesContainer = document.querySelector(".countries-container");
const countryCard = document.querySelector(".country-card");

/* fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country.name.official);
    });
  }); */

async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    data.forEach((country) => {
    //   console.log(country.name.official);
      console.log(country);

      const createCountryCard = document.createElement("div");
      createCountryCard.classList.add("country-card");
      const countrySnippet = `<img src="${country.flags.svg}" alt="${country.flag}" />
          <div class="card-text">
            <h3>${country.name.official}</h3>
            <p><b>Population:</b> ${country.population.toLocaleString("en-IN")}</p>
            <p><b>Region:</b> ${country.region}</p>
            <p><b>Capital:</b> ${country.capital}</p>
          </div>`;
      createCountryCard.innerHTML = countrySnippet;
      countriesContainer.appendChild(createCountryCard);
    });
  } catch (error) {
    console.error("Error fetching countries", error);
  }
}
// getAllCountries()
 
for (let i = 0; i <= 100; i++) {
  const createCountryCard = document.createElement("div");
  createCountryCard.classList.add("country-card");
  const countrySnippet = `<img src="https://flagcdn.com/ax.svg" alt="flag" />
          <div class="card-text">
            <h3>Germany</h3>
            <p><b>Population:</b> 21123213</p>
            <p><b>Region:</b> Europe</p>
            <p><b>Capital:</b> Berlin</p>
          </div>`;
  createCountryCard.innerHTML = countrySnippet;
  countriesContainer.appendChild(createCountryCard); 

}