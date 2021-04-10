import { calculatorReducer } from '@/features/configurator/calculator-slice';
import { menuReducer } from '@/features/main-navbar/menu-slice';
import { testimonialReducer } from '@/features/testimonial/testimonial-slice';
import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    testimonial: testimonialReducer,
    calculator: calculatorReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => _useDispatch<AppDispatch>();

interface TypedUseSelectorHook<TState> {
  <TSelected>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
