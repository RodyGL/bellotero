import { api } from '@/api';
import { Status } from '@/global-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMenu = createAsyncThunk('fetchMenu', async () => {
  const res = await api.getMenu();
  return res.data;
});

export interface MenuState {
  status: Status;
  items: Array<{ text: string; route: string }>;
}

const initialState: MenuState = {
  status: 'idle',
  items: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = state.status === 'idle' ? 'loading' : 'fetching';
      })
      .addCase(fetchMenu.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.items = payload.menu.items;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { reducer: menuReducer } = menuSlice;
