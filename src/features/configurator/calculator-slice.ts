import { api } from '@/api';
import { Status } from '@/global-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCalculator = createAsyncThunk('fetchCalculator', async () => {
  const res = await api.getCalculator();
  return res.data;
});

export interface CalculatorState {
  status: Status;
  title: string;
  description: string;
}

const initialState: CalculatorState = {
  status: 'idle',
  title: '',
  description: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCalculator.pending, (state) => {
        state.status = state.status === 'idle' ? 'loading' : 'fetching';
      })
      .addCase(fetchCalculator.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.title = payload.calculator.title;
        state.description = payload.calculator.description;
      })
      .addCase(fetchCalculator.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { reducer: calculatorReducer } = calculatorSlice;
