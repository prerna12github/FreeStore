import { useEffect, useRef } from 'react';
import { canvasPreview } from './canvasPreview';

export default function CropPreview({ img, crop }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!crop?.width || !crop?.height || !img || !canvasRef.current) {
      return;
    }

    canvasPreview(img, canvasRef.current, crop, 1, 0);
  }, [img, crop]);

  if (!crop || !img) return null;

  return (
    <canvas
      ref={canvasRef}
      className="border rounded-lg mt-4"
    />
  );
}
