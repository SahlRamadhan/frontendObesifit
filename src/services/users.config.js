import ObesifitApi from "./api.config";

export const getAllUsers = async () => {
    try {
        const response = await ObesifitApi.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export const verifyDokter = async (id, isVerified) => {
    try {
        const response = await ObesifitApi.patch(`/users/verify/${id}`, isVerified);
        return response.data;
    } catch (error) {
        console.error("Error verifying dokter:", error);
    }
};

export const rejectDokter = async (id) => {
    try {
        const response = await ObesifitApi.patch(`/users/reject/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error rejecting dokter:", error);
    }
};


