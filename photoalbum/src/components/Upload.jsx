import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Upload = () => {
  const fileInputRef = useRef(null);
  const cropperRef = useRef(null);

  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // Open file picker
  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  // When image is selected
  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // Base64
      setCroppedImage(null);
    };
    reader.readAsDataURL(file);
  };

  // Crop image
  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
      width: 512,
      height: 512,
      imageSmoothingQuality: "high",
    });

    if (!canvas) return;

    const croppedBase64 = canvas.toDataURL("image/png");
    setCroppedImage(croppedBase64);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-4">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={onFileChange}
      />

      <button
        onClick={openFilePicker}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Upload Image
      </button>

      {image && (
        <>
          <Cropper
            src={image}
            style={{ height: 400, width: 300 }}
            initialAspectRatio={1}
            aspectRatio={1}
            guides={true}
            viewMode={1}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            ref={cropperRef}
          />

          <button
            onClick={cropImage}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            Crop
          </button>
        </>
      )}

      {croppedImage && (
        <div className="mt-4 text-center">
          <p className="text-gray-300 mb-2">Cropped Image</p>
          <img
            src={croppedImage}
            alt="cropped"
            className="w-40 h-40 rounded-lg border"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
