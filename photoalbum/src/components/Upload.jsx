import { useRef, useState } from "react";
import { uploadImageToDrive } from "@/services/googleDriveService";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const openFilePicker = () => fileInputRef.current.click();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const uploadToDrive = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("accessToken"));
      await uploadImageToDrive(selectedFile, token);
      alert("✅ Image uploaded to Google Drive");
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
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
        Select Image
      </button>

      {preview && (
        <>
          <img
            src={preview}
            alt="Preview"
            className="max-w-md rounded-lg border"
          />
          
          
         

          <button
            onClick={uploadToDrive}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Upload to Google Drive
          </button>
        
         
          <button
          onClick={()=>navigate("/Dashboard")}
          className="flex gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Go to Dashboard
          </button>
          </>
      )}
    </div>
  );
};

export default Upload;


