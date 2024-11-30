import ObesifitApi from "./api.config";

export const createKalkulatorBMI = async (data) => {
  try {
    const response = await ObesifitApi.post("/kalkulatorBMI/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating BMI:", error);
  }
};
