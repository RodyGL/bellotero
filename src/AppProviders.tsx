import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

export interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders(props: AppProvidersProps) {
  const { children } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
