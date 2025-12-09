import request from "./index";

export const sendMessage = (message) => request.get(`/chat?message=${message}`);