import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/views/Footer/Footer'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import NavBar from './components/views/NavBar/NavBar'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Footer" element={<Footer />} />
          <Route path="/login" element={Auth(LoginPage, false)} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/signup" element={Auth(RegisterPage, false)} />
          <Route path="/" element={Auth(LandingPage, null)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;