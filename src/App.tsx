import React from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store';
import { RecoilContainer } from './store/RecoilContainer';

function App() {

  return (
    <div className="App">
      <RecoilContainer persistPrefix={'UUI-Template'} persistStates={[store.Auth]}>
        <AppRouter />
      </RecoilContainer>
    </div>
  );
}

export default App;
