import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SingupPage from './pages/SingupPage';
import UserHomePage from './pages/UserHomePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UserHomePage />} />
          <Route exact path='/admin' element={<AdminDashboardPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/singup' element={<SingupPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
