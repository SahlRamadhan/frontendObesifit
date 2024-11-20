import React from 'react';
import ChartCard from './ChartCardHomeAdmin';

const ChartsRowHomeAdmin = () => {
  const chartTitles = [
    'Jumlah Pengguna Aktif',
    'Jumlah Artikel',
    'Jumlah Dokter Aktif',
    'Jumlah Video',
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {chartTitles.map((title, index) => (
        <ChartCard key={index} title={title} />
      ))}
    </div>
  );
};

export default ChartsRowHomeAdmin;
