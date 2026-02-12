import { useEffect, useRef } from "react";

const CropPreview = ({ img, crop, onCropComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!img || !crop?.width || !crop?.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    // ✅ Convert canvas to Base64
    const base64 = canvas.toDataURL("image/png");
    onCropComplete(base64);
  }, [img, crop, onCropComplete]);

  return <canvas ref={canvasRef} className="hidden" />;
};

export default CropPreview;
