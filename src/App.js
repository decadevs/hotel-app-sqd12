import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProfileLayout} from './layouts/userProfileLayout/ProfileLayout'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/profile" element={<ProfileLayout/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
