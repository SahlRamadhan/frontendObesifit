import ObesifitApi from "./api.config";


export const createChat = async (data) => {
    try {
        const response = await ObesifitApi.post("/chat/create", data);
        return response.data;
    } catch (error) {
        console.error("Error creating chat:", error);
    }
};

export const fetchChat = async (sessionId) => {
  try {
    const response = await ObesifitApi.get(`/chat/session/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chats:", error);
  }
};

export const fetchSession = async (role, id) => {
    try {
        const response = await ObesifitApi.get(`/chat/session/${role}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching sessions:", error);
    }
};

export const getAllSessions = async () => {
  try {
    const response = await ObesifitApi.get("/chat/session");
    return response.data;
  } catch (error) {
    console.error("Error fetching sessions:", error);
  }
}

export const sendMessage = async (data) => {
    try {
        const response = await ObesifitApi.post("/chat/send", data);
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

export const closeSession = async (sessionId) => {
  try {
    const response = await ObesifitApi.post(`/chat/close/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Error closing session:", error);
  }
};


export const deleteSessionAndMessages = async (sessionId) => {
  try {
    const response = await ObesifitApi.delete(`/chat/delete/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};
