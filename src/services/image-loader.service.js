const loadingImages = [];

function createImageOnLoadPromise (imageSrc) {
  return new Promise((resolve) => {
    const image = document.createElement('img');
    image.src = imageSrc;
    loadingImages.push(image);
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
}

function loadImage (imageSrc) {
  const onLoadPromise = createImageOnLoadPromise(imageSrc);
  return onLoadPromise;
}

export {
  loadImage
};
