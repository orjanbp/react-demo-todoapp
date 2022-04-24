import React from 'react';
import { Route, Routes } from 'react-router';
import { TodoOverviewPage } from '../pages/TodoOverview/TodoOverviewPage';

/**
 * Routing component. Routes in the application propagate from this root file, which
 * is kept here separate from the App just to keep things tidy.
 */
export const AppRouting = () => (
  <Routes>
    <Route path="/" element={<TodoOverviewPage />} />
  </Routes>
);
