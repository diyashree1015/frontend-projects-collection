const newsList = document.getElementById("newsList");

function getNews() {
  const query = document.getElementById("searchInput").value || "India";

  newsList.innerHTML = "Loading...";

  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(
    query
  )}&hl=en-IN&gl=IN&ceid=IN:en`;

  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`)
    .then(res => res.json())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, "text/xml");
      const items = xml.querySelectorAll("item");

      if (!items.length) {
        newsList.innerHTML = "<p class='error'>No news found</p>";
        return;
      }

      newsList.innerHTML = "";

      items.forEach((item, index) => {
        if (index >= 5) return;

        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;

        newsList.innerHTML += `
          <div class="news-card">
            <h4>${title}</h4>
            <a href="${link}" target="_blank">Read more</a>
          </div>
        `;
      });
    })
    .catch(() => {
      newsList.innerHTML = "<p class='error'>Error loading news</p>";
    });
}
