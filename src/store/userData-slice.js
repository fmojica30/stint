import {createSlice} from '@reduxjs/toolkit';

const initialUserDataState = {
  campaigns: null,
  currentCampaign: null,
  goals: null,
  dgComp: null
}

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialUserDataState,
  reducers: {
    setCurrentCampaign(state, action) {
      state.currentCampaign = action.payload.cc; 
    }
  }
})

export const userDataActions = userDataSlice.actions;
export default userDataSlice.reducer;