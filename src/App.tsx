import { Route, Routes } from 'react-router-dom';
import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import './App.css';
import { Header } from './components/core/Header';
import SingletonProviders from './contexts/SingletonProviders';
import { HomePage } from 'pages/HomePage';

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
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </SingletonProviders>
    </CacheProvider>
  );
}

export default App;
