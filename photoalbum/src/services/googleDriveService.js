const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
console.log("📁 Folder ID from ENV:", FOLDER_ID);

export const uploadImageToDrive = async (file, accessToken) => {
  if (!file) {
    throw new Error("No image to upload");
  }

  if (!accessToken) {
    throw new Error("No access token");
  }

  const metadata = {
    name: file.name,              // original file name
    mimeType: file.type,          // original mime type
    parents: [FOLDER_ID],         // your Drive folder
  };

  const formData = new FormData();

  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    })
  );

  formData.append("file", file);  // ✅ ORIGINAL FILE

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
    const error = await response.text();
    console.error(error);
    throw new Error("Google Drive upload failed");
  }

  return response.json();
};
