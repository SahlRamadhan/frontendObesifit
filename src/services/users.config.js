import ObesifitApi from "./api.config";

export const getAllUsers = async () => {
    try {
        const response = await ObesifitApi.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export const verifyDokter = async (id) => {
    try {
        const response = await ObesifitApi.patch(`/users/verify/${id}`);
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

export const deleteUser = async (id) => {
    try {
        const response = await ObesifitApi.delete(`/users/${id}`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

export const getStatisticUsers = async () => {
    try {
        const response = await ObesifitApi.get("/users/statistic");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export const updateUser = async (id, data) => {
    try {
        const response = await ObesifitApi.put(`/users/update/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
    }
};