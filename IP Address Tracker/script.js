const result = document.getElementById("result");

function trackIP() {
  const inputIP = document.getElementById("ipInput").value.trim();

  result.innerHTML = "Loading...";

  // If user enters IP, use it. Otherwise auto-detect.
  if (inputIP) {
    fetchGeo(inputIP);
  } else {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => fetchGeo(data.ip))
      .catch(() => {
        result.innerHTML = "<p class='error'>Unable to detect IP</p>";
      });
  }
}

function fetchGeo(ip) {
  fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json`)
    .then(res => res.json())
    .then(data => {
      result.innerHTML = `
        <p><strong>IP:</strong> ${data.ip}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>ISP:</strong> ${data.organization}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "<p class='error'>Unable to fetch IP details</p>";
    });
}
