const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const placeholder = document.getElementById("placeholder");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please upload a valid image file");
    imageInput.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    previewImage.src = reader.result;
    previewImage.style.display = "block";
    placeholder.style.display = "none";
  };

  reader.readAsDataURL(file);
});
