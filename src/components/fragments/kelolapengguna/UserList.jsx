import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    'Agus',
    'Atox Dalang',
    'BeyonceASLI',
    'DINOKUNING#21',
    'Leonardo da Vinci',
    'PrabowoKW',
    'PEKORAAA',
    'Must a nice',
    'UpinftIpin',
    'ShalehPetarunx',
  ]); // State untuk daftar pengguna
  const [searchTerm, setSearchTerm] = useState(''); // State untuk input pencarian
  const [showPopup, setShowPopup] = useState(false); // State untuk popup
  const [selectedUser, setSelectedUser] = useState(''); // State untuk user terpilih

  // Filter daftar pengguna berdasarkan input pencarian
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (user) => {
    setSelectedUser(user); // Simpan nama user yang akan dihapus
    setShowPopup(true); // Tampilkan popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Tutup popup
  };

  const handleConfirmDelete = () => {
    // Hapus user dari daftar pengguna
    setUsers(users.filter((user) => user !== selectedUser));
    setShowPopup(false); // Tutup popup
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <h2 className="text-lg font-semibold mb-4">Temukan Anggota</h2>
      <input
        type="text"
        placeholder="Temukan anggota"
        value={searchTerm} // Value input dikontrol oleh state
        onChange={(e) => setSearchTerm(e.target.value)} // Update state saat input berubah
        className="border rounded-lg p-2 w-full mb-5"
      />
      <ul className="space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="user"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium text-gray-700">{user}</span>
              </div>
              <button
                onClick={() => handleDeleteClick(user)} // Panggil popup
                className="text-red-500 font-bold hover:text-red-700"
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada hasil ditemukan.</p>
        )}
      </ul>

      {/* Popup Konfirmasi */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="confirmation"
                className="mx-auto mb-4"
              />
              <h2 className="text-lg font-bold mb-3">Yakin mau hapus akun pengguna ini?</h2>
              <p className="text-gray-600 mb-6">{selectedUser}</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleClosePopup}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Batalkan
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
