function getCountryInfo() {
  const input = document.getElementById("countryInput").value.trim();
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = `<p class="error">Please enter a country name</p>`;
    return;
  }

  result.innerHTML = "Loading...";

  // 1️⃣ Try exact match first
  fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
    .then(res => {
      if (!res.ok) throw new Error("Exact not found");
      return res.json();
    })
    .then(data => showCountry(data[0]))
    .catch(() => {
      // 2️⃣ Fallback to partial match
      fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(res => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then(data => showCountry(data[0]))
        .catch(() => {
          result.innerHTML = `<p class="error">Country not found</p>`;
        });
    });

  function showCountry(country) {
    result.innerHTML = `
      <img src="${country.flags.svg}" alt="Flag">
      <p><strong>Name:</strong> ${country.name.common}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] || "N/A"}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;
  }
}
