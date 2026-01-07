import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        setLoading(false);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Activities</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped octofit-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.date}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Activities;
