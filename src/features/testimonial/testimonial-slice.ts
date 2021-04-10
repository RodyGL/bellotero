import { api } from '@/api';
import { Status } from '@/global-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTestimonials = createAsyncThunk(
  'fetchTestimonials',
  async () => {
    const res = await api.getTestimonials();
    return res.data;
  }
);

export interface TestimonialState {
  status: Status;
  title: string;
  reviews: Array<{ name: string; position: string; comment: string }>;
}

const initialState: TestimonialState = {
  status: 'idle',
  title: '',
  reviews: [],
};

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = state.status === 'idle' ? 'loading' : 'fetching';
      })
      .addCase(fetchTestimonials.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.title = payload.slider.title;
        state.reviews = payload.slider.reviews;
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { reducer: testimonialReducer } = testimonialSlice;
