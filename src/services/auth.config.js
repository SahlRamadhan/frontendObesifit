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
