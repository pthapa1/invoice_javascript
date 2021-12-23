document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
  const dropZoneElement = inputElement.closest('.drop-zone');
  // add click event on inputElement when clicked on dropzoneElement.

  dropZoneElement.addEventListener('click', (e) => {
    inputElement.click();
  });

  inputElement.addEventListener('change', (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });
});
// thumbnail.
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector('.drop-zone__thumb');

  // First, remove the prompt: Remove profile image prompt.
  if (dropZoneElement.querySelector('.drop-zone__prompt')) {
    dropZoneElement.querySelector('.drop-zone__prompt').remove();
  }
  // Thumbnail element that shows the image does not exist yet. So, lets create it.

  if (!thumbnailElement) {
    thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('drop-zone__thumb');
    dropZoneElement.appendChild(thumbnailElement);
  }

  // thumbnailElement.dataset.label = file.name;

  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url(${reader.result})`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
