import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'ready',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    }
  },
});

const { actions, reducer } = uiSlice;

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = actions;

export default reducer;