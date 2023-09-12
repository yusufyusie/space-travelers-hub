import React from 'react';
import './Missions.module.css';

const Missions = () => (
  <section className="mission-container">
    <table className="table">
      <thead>
        <tr className="row">
          <th className="column">Mission</th>
          <th className="column">Description</th>
          <th className="column">Status</th>
          <th className="column">Join Mission</th>
        </tr>
      </thead>
    </table>
  </section>
);
export default Missions;
