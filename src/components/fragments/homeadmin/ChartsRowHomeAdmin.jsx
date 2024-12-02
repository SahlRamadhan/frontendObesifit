import React from "react";
import { Line } from "react-chartjs-2";
import { Chart  } from "chart.js/auto";

const ChartsRowHomeAdmin = ({ stats }) => {
  const chartData = [
    {
      title: "Jumlah Pengguna Aktif",
      value: stats.activeUsers,
    },
    {
      title: "Jumlah Artikel",
      value: stats.totalArticles,
    },
    {
      title: "Jumlah Dokter Aktif",
      value: stats.activeDoctors,
    },
    {
      title: "Jumlah Video",
      value: stats.totalVideos,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {chartData.map((data, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">{data.title}</h2>
          <div className="h-48">
            <Line
              data={{
                labels: [data.title],
                datasets: [
                  {
                    label: data.title,
                    data: [data.value],
                    borderColor: "rgba(75, 192, 192, 1)", // Warna garis
                    backgroundColor: "rgba(75, 192, 192, 0.2)", // Warna area di bawah garis
                    tension: 0.4, // Membuat garis menjadi smooth
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartsRowHomeAdmin;
