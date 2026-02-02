import { base64ToBlob } from "../utils/base64ToBlob";
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
console.log("📁 Folder ID from ENV:", FOLDER_ID);



export const uploadImageToDrive = async (croppedImage, accessToken) => {
  if (!croppedImage) {
    throw new Error("No image to upload");
  }

  if (!accessToken) {
    throw new Error("No access token");
  }

  const blob = base64ToBlob(croppedImage);

  const metadata = {
    name: `cropped_${Date.now()}.png`,
    mimeType: "image/png",
    parents: [FOLDER_ID],
  };

  const formData = new FormData();
  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  formData.append("file", blob);

  const response = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Google Drive upload failed");
  }

  return response.json();
};
