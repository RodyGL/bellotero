import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppProviders } from './AppProviders';
import { MainNavbar } from './features/main-navbar/MainNavbar';
import PageOneIndex from './pages/page-one/PageOneIndex';
import PageTwoIndex from './pages/page-two/PageTwoIndex';

export function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-ice-blue text-black">
      <AppProviders>
        <MainNavbar />

        <Routes>
          <Route path="page-1" element={<PageOneIndex />} />
          <Route path="page-2" element={<PageTwoIndex />} />

          <Route path="*" element={<Navigate replace to="/page-1" />} />
        </Routes>
      </AppProviders>
    </div>
  );
}
