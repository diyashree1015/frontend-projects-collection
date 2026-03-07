function generateProfile() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const image = document.getElementById("image").value.trim();
  const bio = document.getElementById("bio").value.trim();

  if (!name || !role || !bio) {
    alert("Please fill all required fields");
    return;
  }

  document.getElementById("profileName").innerText = name;
  document.getElementById("profileRole").innerText = role;
  document.getElementById("profileBio").innerText = bio;

  const img = document.getElementById("profileImg");
  img.src = image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300";

  document.getElementById("profileCard").style.display = "block";
}
