import { createSlice } from "@reduxjs/toolkit";

const chatNavigationSlice = createSlice({
  name: "chatNavigation",
  initialState: {
    hasStartedIntroSession: false,
    hasStartedFSkill: false,
    hasStartedISkill: false,
    hasStartedRSkill: false,
    hasStartedSSkill: false,
    hasStartedTSkill: false,
    hasStartedOutroSession: false,
  },
  reducers: {
    startIntroSession(state) {
      state.hasStartedIntroSession = true;
    },
    startFSkill(state) {
      state.hasStartedFSkill = true;
    },
    startISkill(state) {
      state.hasStartedFSkill = true;
    },
    startRSkill(state) {
      state.hasStartedFSkill = true;
    },
    startSSkill(state) {
      state.hasStartedFSkill = true;
    },
    startTSkill(state) {
      state.hasStartedFSkill = true;
    },
    startOutroSession(state) {
      state.hasStartedOutroSession = true;
    },
  },
});

export const chatNavigationActions = chatNavigationSlice.actions;

export default chatNavigationSlice;
