import ObesifitApi from "./api.config.js";

export const loginUser = async (email, password,expectedRole) => {
  try {
    const response = await ObesifitApi.post("/auth/login", { email, password, expectedRole });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response Axios:", error.response); // Debug respons error
      return error.response.data;
    } else {
      console.error("Error Network Axios:", error.message); // Debug error jaringan
      throw new Error("Gagal terhubung ke server.");
    }
  }
};


export const logoutUser = async () => {
  try {
    const response = await ObesifitApi.delete("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
  }
}

export const refreshToken = async () => {
  try {
    const response = await ObesifitApi.get("/auth/token");
    return response.data;
  } catch (error) {
    console.log("Error refreshing token:", error);
  }
};


export const registerUser = async (dataUser) => {
  try {
    const response = await ObesifitApi.post("/auth/register/user", dataUser);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response Axios:", error.response); // Debug respons error
      return error.response.data;
    } else {
      console.error("Error Network Axios:", error.message); // Debug error jaringan
      throw new Error("Gagal terhubung ke server.");
    }
  }
};


export const registerDokter = async (dataDokter) => {
  try {
    const formData = new FormData();
    Object.keys(dataDokter).forEach((key) => {
      formData.append(key, dataDokter[key]);
    });
    const response = await ObesifitApi.post("/auth/register/dokter", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response Axios:", error.response); // Debug respons error
      return error.response.data;
    } else {
      console.error("Error Network Axios:", error.message); // Debug error jaringan
      throw new Error("Gagal terhubung ke server.");
    }
  }
};

export const verifyOtp = async (email, otp) => {
  const response = await ObesifitApi.post("/auth/verifyOtp", { email, otp });
  return response.data;
};

export const resendOtp = async (email) => {
  const response = await ObesifitApi.post("/auth/resendOtp", { email });
  return response.data;
};

export const requestResetPassword = async (email) => {
  const response = await ObesifitApi.post("/auth/requestResetPassword", { email });
  return response.data;
};

export const verifyResetPassword = async (email, otp) => {
  const response = await ObesifitApi.post("/auth/verifyResetPassword", { email, otp });
  return response.data;
};

export const resetPassword = async (email, newPassword, confirmPassword) => {
  const response = await ObesifitApi.post("/auth/resetPassword", { email, password:newPassword, confirmPassword });
  return response.data;
};
