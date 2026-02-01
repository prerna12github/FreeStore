import { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import CropPreview from "./CropPreview";
import { uploadImageToDrive } from "../services/googleDriveService";

const Upload = () => {
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    aspect: 1, // square
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);


  const openFilePicker = () => fileInputRef.current.click();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  };

    const uploadToDrive = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    await uploadImageToDrive(croppedImage, token);
    alert("✅ Image uploaded to Google Drive");
  } catch (err) {
    console.error(err);
    alert(err.message || "❌ Upload failed");
  }
};

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-4 p-4">
      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileInputRef}
        onChange={onFileChange}
      />

      <button
        onClick={openFilePicker}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Upload Image
      </button>

      {imageSrc && (
        <div className="max-w-md w-full">
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={1}
          >
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Upload"
              className="max-h-[400px]"
            />
          </ReactCrop>
        </div>
      )}

      {/* Canvas Preview */}
      <CropPreview
        img={imgRef.current}
        crop={completedCrop}
        onCropComplete={setCroppedImage}
      />
      {croppedImage && (
  <button
    onClick={uploadToDrive}
    className="px-6 py-2 bg-green-600 text-white rounded-lg"
  >
    Upload to Google Drive
  </button>
)}

    </div>
    
  );
};

export default Upload;
