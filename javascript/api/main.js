const img = document.querySelector(".gif");
function fetchGif(searchedWord) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Hy9ikm3evZGKgzBCi1NOh4JvJHfCAxkU&s=${searchedWord}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response)
      img.src = response.data.images.original.url;
    })
    .catch(function (err) {
      alert("An error occured")
    })
}

fetchGif();

const bttn = document.querySelector(".new");
const search = document.querySelector(".search");

bttn.addEventListener("click", () => {
  fetchGif(search.value);
});

