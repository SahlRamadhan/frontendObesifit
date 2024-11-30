import ObesifitApi from "./api.config";

export const getAllVideo = async () => {
  try {
    const response = await ObesifitApi.get("/video", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

export const getVideoById = async (id) => {
  try {
    const response = await ObesifitApi.get(`/video/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

export const createVideo = async (data) => {
  try {
    const response = await ObesifitApi.post("/video/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating video:", error);
  }
};

export const updateVideo = async (id, data) => {
  try {
    const response = await ObesifitApi.put(`/video/update/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating video:", error);
    throw error;
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await ObesifitApi.delete(`/video/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting video:", error);
  }
};
