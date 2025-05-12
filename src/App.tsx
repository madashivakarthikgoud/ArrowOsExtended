import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import FeaturesPage from './pages/Features';
import DownloadsPage from './pages/Downloads';
import ChangelogPage from './pages/Changelog';

function App() {
  const location = useLocation();
  
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;