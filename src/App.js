import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ResetUpdatePassword from './components/ResetUpdatePassword/ResetUpdatePassword'
import {ProfileLayout} from './layouts/userProfileLayout/userProfileLayout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/profile" element={<ProfileLayout/>}/>
      <Route path ="/resetupdatepassword" element={<ResetUpdatePassword/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
