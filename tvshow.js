const form = document.querySelector("#searchForm");
const container = document.querySelector("#container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  container.innerHTML = "";
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      container.append(img);
    }
  }
};
