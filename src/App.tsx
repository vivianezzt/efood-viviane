import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globals';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
