import { io } from "socket.io-client";

const socket = io("http://localhost:4000", { transports: ["websocket"], withCredentials: true }); // Ganti dengan URL socket.io Anda

export default socket;
