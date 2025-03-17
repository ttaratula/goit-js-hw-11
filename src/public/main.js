import { fetchImages } from "../js/pixabay-api.js";
import { renderGallery, clearGallery } from "../js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById("search-form");
const loader = document.getElementById("loader");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search term!" });
    return;
  }

  loader.classList.remove("hidden");
  clearGallery();

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.info({ message: "Sorry, no images found. Try another search!" });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    iziToast.error({ message: "Something went wrong. Please try again later." });
  } finally {
    loader.classList.add("hidden");
  }
});


// function renderGallery(images) {
//   gallery.innerHTML = images
//     .map(
//       ({ webformatURL, tags }) =>
//         `<div class="image-card">
//           <img src="${webformatURL}" alt="${tags}" />
//         </div>`
//     )
//     .join("");
// }

