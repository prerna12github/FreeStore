import { useState } from "react";
import Upload from "@/components/Upload";

const Dashboard = () => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      {!showUpload ? (
        <div className="bg-slate-800 max-w-sm rounded-xl p-6 text-center">
          <img src="album.png" alt="album" />
          <h2 className="px-6 py-4 text-white text-xl mb-4">
            Personal Photo Album
          </h2>

          <div className="px-4 py-2">
            <button className="text-white" onClick={() => setShowUpload(true)}>
              Upload Photos
            </button>
          </div>

          <div className="px-4 py-2">
            <button className="text-white">View Photos</button>
          </div>

          <div className="px-4 py-2">
            <button className="text-white">Sign Out</button>
          </div>
        </div>
      ) : (
        <Upload />
      )}
    </div>
  );
};

export default Dashboard;
