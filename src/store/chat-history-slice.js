import { createSlice } from "@reduxjs/toolkit";

const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState: {
    messages: [],
  },
  reducers: {
    addNewAlfieMessage(state, action) {
      const newAlfieMessage = action.payload;
      state.messages.push({ alfie: newAlfieMessage });
    },
    addNewUserMessage(state, action) {
      const newUserMessage = action.payload;
      state.messages.push({ user: newUserMessage });
    },
  },
});

export const chatHistoryActions = chatHistorySlice.actions;

export default chatHistorySlice;
