import { configureStore } from "@reduxjs/toolkit";

import chatHistorySlice from "./chat-history-slice";
import chatNavigationSlice from "./chat-navigation-slice";

const store = configureStore({
  reducer: {
    chatHistory: chatHistorySlice.reducer,
    chatNavigation: chatNavigationSlice.reducer,
  },
});

export default store;
