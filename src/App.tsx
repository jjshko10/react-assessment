import { Routes } from 'react-router-dom';
import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import './App.css';
import { Header } from './components/core/Header';
import SingletonProviders from './contexts/SingletonProviders';

let muiCache: EmotionCache | undefined = undefined;
export const createMuiCache = () => (
  muiCache = createCache({
      key: 'mui',
      prepend: true,
  })
);

function App() {
  return (
    <CacheProvider value={muiCache ?? createMuiCache()}>
      <SingletonProviders>
        <div className="App">
          <Header />
          <Routes>

          </Routes>
        </div>
      </SingletonProviders>
    </CacheProvider>
  );
}

export default App;
