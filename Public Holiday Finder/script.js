const holidayList = document.getElementById("holidayList");

function getHolidays() {
  const country = document.getElementById("country").value;
  const year = document.getElementById("year").value || new Date().getFullYear();

  holidayList.innerHTML = "Loading...";

  // 🇮🇳 INDIA → Google Calendar (ICS)
  if (country === "IN") {
    const icsUrl =
      "https://calendar.google.com/calendar/ical/en.indian%23holiday%40group.v.calendar.google.com/public/basic.ics";

    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(icsUrl)}`)
      .then(res => res.text())
      .then(data => {
        const events = data.split("BEGIN:VEVENT").slice(1);

        const holidays = events
          .map(event => {
            const summary = event.match(/SUMMARY:(.*)/);
            const date = event.match(/DTSTART;VALUE=DATE:(\d+)/);
            if (!summary || !date) return null;

            return {
              name: summary[1],
              date:
                date[1].slice(0, 4) +
                "-" +
                date[1].slice(4, 6) +
                "-" +
                date[1].slice(6, 8)
            };
          })
          .filter(h => h && h.date.startsWith(year));

        if (!holidays.length) {
          holidayList.innerHTML =
            "<p class='error'>No holidays found for this year.</p>";
          return;
        }

        holidayList.innerHTML = "";
        holidays.forEach(h => {
          holidayList.innerHTML += `
            <div class="holiday-card">
              <strong>${h.name}</strong><br>
              <span>${h.date}</span>
            </div>
          `;
        });
      })
      .catch(() => {
        holidayList.innerHTML =
          "<p class='error'>Unable to fetch India holidays.</p>";
      });

    return;
  }

  // 🌍 OTHER COUNTRIES → Nager.Date
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`)
    .then(res => res.json())
    .then(data => {
      holidayList.innerHTML = "";
      data.forEach(h => {
        holidayList.innerHTML += `
          <div class="holiday-card">
            <strong>${h.localName}</strong><br>
            ${h.name}<br>
            <span>${h.date}</span>
          </div>
        `;
      });
    })
    .catch(() => {
      holidayList.innerHTML =
        "<p class='error'>Unable to fetch holidays.</p>";
    });
}
