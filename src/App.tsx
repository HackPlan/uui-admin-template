import React from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store';
import { RecoilContainer } from './store/RecoilContainer';

function App() {

  return (
    <div className="App">
      <RecoilContainer persistStates={[store.Auth]}>
        <AppRouter />
      </RecoilContainer>
    </div>
  );
}

export default App;
