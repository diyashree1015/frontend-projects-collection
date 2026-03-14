const jobList = document.getElementById("jobList");

function getJobs() {
  const query = document.getElementById("searchInput").value.trim() || "developer";

  jobList.innerHTML = "Loading...";

  fetch(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.jobs || data.jobs.length === 0) {
        jobList.innerHTML = `<p class="error">No jobs found</p>`;
        return;
      }

      jobList.innerHTML = "";

      data.jobs.slice(0, 5).forEach(job => {
        jobList.innerHTML += `
          <div class="job-card">
            <h4>${job.title}</h4>
            <p><strong>Company:</strong> ${job.company_name}</p>
            <p><strong>Location:</strong> ${job.candidate_required_location}</p>
            <a href="${job.url}" target="_blank">View Job</a>
          </div>
        `;
      });
    })
    .catch(() => {
      jobList.innerHTML = `<p class="error">Error loading jobs</p>`;
    });
}
