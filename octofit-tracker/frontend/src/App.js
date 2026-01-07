

import octofitLogo from './octofitapp-small.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';



function Home() {
  return (
    <header className="App-header">
      <h1 className="octofit-heading">Welcome to OctoFit Tracker</h1>
      <p className="octofit-description">
        Track your fitness, join teams, and compete on the leaderboard!
      </p>
      <a
        className="App-link btn btn-primary octofit-btn"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div className="container mt-4">
        <table className="table octofit-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Activity Logging</td>
              <td>Enabled</td>
            </tr>
            <tr>
              <td>Team Management</td>
              <td>Enabled</td>
            </tr>
            <tr>
              <td>Leaderboard</td>
              <td>Enabled</td>
            </tr>
            <tr>
              <td>Workout Suggestions</td>
              <td>Enabled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="octofit-navbar navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={octofitLogo} alt="Octofit Logo" className="octofit-logo me-2" />
              <span>OctoFit Tracker</span>
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/activities">Activities</Link>
              <Link className="nav-link" to="/teams">Teams</Link>
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/workouts">Workouts</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
