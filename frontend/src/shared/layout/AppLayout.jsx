import React from 'react';
import AppHeader from './AppHeader';

const AppLayout = ({ children }) => {
  return (
    <div id="layout-root">
      <AppHeader />
      <main id="main-content">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
