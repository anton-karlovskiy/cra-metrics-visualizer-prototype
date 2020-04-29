
const getImageDimensions = file => {
  return new Promise ((resolved, rejected) => {
    const image = new Image();
    image.onload = function() {
      resolved({
        width: image.width,
        height: image.height
      });
    };
    image.src = file;
  });
};

export {
  getImageDimensions
};
