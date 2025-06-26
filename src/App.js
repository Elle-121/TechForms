import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import Accounts from './pages/Accounts/Accounts';
import Profile from './pages/Profile/Profile';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />




      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
