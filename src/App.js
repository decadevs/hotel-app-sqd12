import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/landingPageIndex/LandingPage';

function App() {
  return (
    <>
      <Router>
        <LandingPage/>
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
