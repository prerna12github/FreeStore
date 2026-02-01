export const base64ToBlob = (base64) => {
  const [header, data] = base64.split(",");
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(data);

  const buffer = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    buffer[i] = binary.charCodeAt(i);
  }

  return new Blob([buffer], { type: mime });
};
