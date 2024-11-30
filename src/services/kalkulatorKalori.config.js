import ObesifitApi from "./api.config";

export const createKalkulatorKalori = async (data) => {
    try {
        const response = await ObesifitApi.post("/kalkulatorKalori/create", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating Kalori:", error);
    }
};