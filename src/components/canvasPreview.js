// canvasPreview.js
export function canvasPreview(
  image,
  canvas,
  crop,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const pixelRatio = window.devicePixelRatio;
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width * scaleX * pixelRatio;
  canvas.height = crop.height * scaleY * pixelRatio;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = 'high';

  ctx.save();
  ctx.translate(-crop.x * scaleX, -crop.y * scaleY);
  ctx.drawImage(image, 0, 0);
  ctx.restore();
}
