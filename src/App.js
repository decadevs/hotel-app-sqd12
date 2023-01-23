import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProfileLayout} from './layouts/userProfileLayout/ProfileLayout'
import './App.css';
import ResetUpdatePassword from './components/ResetUpdatePassword/ResetUpdatePassword'

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
