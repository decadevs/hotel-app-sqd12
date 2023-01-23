import logo from './logo.svg';
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
