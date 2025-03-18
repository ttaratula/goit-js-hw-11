import { fetchImages } from "./js/pixabay-api.js";
import { clearGallery } from "./js/render-functions.js";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(`form`);
const gallery = document.querySelector(`.gallery`);
const loader = document.querySelector(`.loader`);


form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search query!" });
    return;
  }

  loader.classList.remove("hidden");
  clearGallery();

  try {
    const images = await fetchImages(query);
    console.log(images);
    if (images.length === 0) {
      iziToast.info({ message: "Sorry, no images found. Try another search!" });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" });
  } finally {
    loader.classList.add("hidden");
  }
});


export const renderGallery = (images) => {
const gallery = document.getElementById("gallery"); 
  gallery.innerHTML = images
    .map(
      ({ webformatURL, tags }) =>
        `<div class="image-card">
          <img src="${webformatURL}" alt="${tags}" />
        </div>`
    )
    .join("");
}

