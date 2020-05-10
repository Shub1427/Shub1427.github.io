import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// #region Slices
export interface IStorage {
  mode: boolean;
}

type IStorageStore = IStorage;
// #endregion

// Initial State
const initialState: IStorageStore = {
  mode: false,
};

const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<IStorageStore>) {
      state.mode = action.payload.mode;
    },
  },
});

export const setMode = storageSlice.actions.setMode;

export default storageSlice.reducer;
