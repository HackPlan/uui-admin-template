import React from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { StoreProvider } from './contexts/MobxStoreContext';

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
