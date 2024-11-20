import React from "react";

const VideoStats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Total Pengguna */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Video</h2>
        <p className="text-4xl font-bold text-gray-800">2</p>
      </div>
    </div>
  );
};

export default VideoStats;
