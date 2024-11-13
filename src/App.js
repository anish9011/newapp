import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import MainPage from './Pages/MainPage';
import { BgColorProvider } from './Context/BgColorContext';
import SecondPage from './Pages/SecondPage';

function App() {
  return (
    <Router>
      <BgColorProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/next" element={<SecondPage />} />
        </Routes>
      </BgColorProvider>
    </Router>
  );
}

export default App;
