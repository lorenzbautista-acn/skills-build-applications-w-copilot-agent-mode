
import octofitLogo from '../public/octofitapp-small.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="octofit-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={octofitLogo} alt="Octofit Logo" className="octofit-logo me-2" />
            <span>OctoFit Tracker</span>
          </a>
          <div className="navbar-nav">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Activities</a>
            <a className="nav-link" href="#">Teams</a>
            <a className="nav-link" href="#">Leaderboard</a>
          </div>
        </div>
      </nav>
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
      </header>
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
    </div>
  );
}

export default App;
