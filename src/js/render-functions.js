import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.getElementById("gallery");


export function renderGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy">
          </a>
          <div class="info">
            <p> Likes: ${likes}</p>
            <p> Views: ${views}</p>
            <p> Comments: ${comments}</p>
            <p> Downloads: ${downloads}</p>
          </div>
        </li>
      `
    )
    .join("");

  gallery.innerHTML = markup; // Перезаписуємо вміст галереї

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh(); // Оновлюємо lightbox
  }
}


export function clearGallery() {
  gallery.innerHTML = "";
}
