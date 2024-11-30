import ObesifitApi from "./api.config";

export const getAllArtikel = async () => {
  try {
    const response = await ObesifitApi.get("/artikel", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching artikel:", error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await ObesifitApi.get(`/artikel/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};

export const createArtikel = async (data) => {
  try {
    const response = await ObesifitApi.post("/artikel/create", data);
    return response.data;
  } catch (error) {
    console.error("Error creating artikel:", error);
  }
};

export const updateArticle = async (id, data) => {
  try {
    const response = await ObesifitApi.put(`/artikel/update/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

export const deleteArticle = async (id) => {
  try {
    const response = await ObesifitApi.delete(`/artikel/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error;
  }
};
