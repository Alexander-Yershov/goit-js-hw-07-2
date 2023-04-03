import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');
const galleryMarckup = createGalleryMarkup(galleryItems);
galleryListRef.insertAdjacentHTML('beforeend', galleryMarckup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
        `
    }).join("");
}



galleryListRef.addEventListener('click', onGalleryListRefClick);

function onGalleryListRefClick(evt) {
// Отменяем действие по-умолчанию на ссылках
    evt.preventDefault();

// Проверяем что-бы клик был только по картинке
    if (evt.target.nodeName !== 'IMG') {
        return
    }
// В противном случае используем библиотеку для открытия модального окна
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

    instance.show()

// Добавляем закрытие модалки по "Esc"
    galleryListRef.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    })
}

console.log(galleryItems);

