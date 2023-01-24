import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/landingPageIndex/LandingPage';

function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path="landing-page" element={<LandingPage />} />
          <Route path='/' exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
