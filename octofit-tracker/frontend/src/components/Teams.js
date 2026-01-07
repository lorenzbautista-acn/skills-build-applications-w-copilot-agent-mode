import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        setLoading(false);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Teams</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped octofit-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{team.members ? team.members.length : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Teams;
