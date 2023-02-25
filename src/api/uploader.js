export async function uploadeImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_COUDINARY_PRESET);
  return fetch(process.env.REACT_APP_COUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.url);
}
