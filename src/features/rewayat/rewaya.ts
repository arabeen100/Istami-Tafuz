import { createSlice,  } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  rewaya: string;
}

const initialState: LoginState = {
  rewaya:localStorage.getItem("rewaya")||"",
};

const rewayaSlice = createSlice({
  name: "rewaya",
  initialState,
  reducers: {
    setRewaya: (state, { payload }: PayloadAction<string>) => {
      state.rewaya = payload;
    },
    setItem:(state)=>{
        localStorage.setItem("rewaya",state.rewaya)
    }
  },
});

export default rewayaSlice.reducer;
export const { setRewaya,setItem } = rewayaSlice.actions;
