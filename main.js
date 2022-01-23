var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://ih1.redbubble.net/image.886669323.8686/fpp,small,lustre,wall_texture,product,750x1000.u2.jpg',
  'https://img.ifunny.co/images/262a4f7af615655c8fbb6ac295e934ff4ac3225980076c244f0c320e68abfb3a_1.jpg',
  'https://www.letseatcake.com/wp-content/uploads/2021/04/wholesome-memes-6.jpg',
  'https://i.kym-cdn.com/photos/images/facebook/001/315/649/abd.jpg',
  'https://pbs.twimg.com/media/EWtb9pQWkAAm-sH.jpg',
  'https://i.pinimg.com/474x/67/f0/c7/67f0c7d5415d20ab9ac83727e29dc11f.jpg',
  'https://i.kym-cdn.com/photos/images/original/001/500/628/3cd.png',
  'https://static.wikia.nocookie.net/7d25f6ef-8cf5-41d8-bb30-44d965262035/scale-to-width/755'
];

var gallery = document.querySelector('main');

var imageUrlInput = document.querySelector('input');

var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
