import ObesifitApi from "./api.config";

export const getAllTransaksi = async () => {
  try {
    const response = await ObesifitApi.get("/transaksi");
    return response.data;
  } catch (error) {
    console.error("Error getting transaksi:", error);
  }
};

export const getActiveSubscription = async (id_user) => {
  try {
    const response = await ObesifitApi.get(`/transaksi/active/${id_user}`);
    return response.data;
  } catch (error) {
    console.error("Error getting transaksi:", error);
  }
};

export const createTransaksi = async (data) => {
  try {
    const response = await ObesifitApi.post("/transaksi/create", data);
    return response.data;
  } catch (error) {
    console.error("Error creating transaksi:", error);
  }
};

export const uploadBukti = async (id, formData) => {
  try {
    const response = await ObesifitApi.post(`/transaksi/uploadbukti/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading bukti:", error);
  }
};

export const verfiyTransaksi = async (id, data) => {
  try {
    const response = await ObesifitApi.patch(`/transaksi/verify/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error verifying transaksi:", error);
  }
};

export const checkTransaksi = async (id) => {
  try {
    const response = await ObesifitApi.get(`/transaksi/checkexpired/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error checking transaksi:", error);
  }
};
