import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        setLoading(false);
        console.log('Workouts endpoint:', endpoint);
        console.log('Fetched workouts:', results);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Workouts</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped octofit-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
                <td>{workout.type}</td>
                <td>{workout.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Workouts;
