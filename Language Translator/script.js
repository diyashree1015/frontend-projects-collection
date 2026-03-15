function translateText() {
  const text = document.getElementById("inputText").value.trim();
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("outputText");

  if (!text) {
    output.value = "Please enter text to translate.";
    return;
  }

  output.value = "Translating...";

  fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${from}|${to}`
  )
    .then(res => res.json())
    .then(data => {
      if (data.responseData && data.responseData.translatedText) {
        output.value = data.responseData.translatedText;
      } else {
        output.value = "Translation failed.";
      }
    })
    .catch(() => {
      output.value = "Error translating text.";
    });
}
