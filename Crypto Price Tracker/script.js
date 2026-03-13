const result = document.getElementById("result");

function getPrice() {
  const crypto = document.getElementById("cryptoSelect").value;

  result.innerHTML = "Loading...";

  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd,inr`
  )
    .then(res => res.json())
    .then(data => {
      const usd = data[crypto].usd;
      const inr = data[crypto].inr;

      result.innerHTML = `
        💰 <strong>${crypto.toUpperCase()}</strong><br>
        USD: $${usd}<br>
        INR: ₹${inr}
      `;
    })
    .catch(() => {
      result.innerHTML = `<p class="error">Error fetching price</p>`;
    });
}
