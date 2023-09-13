import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Missions.module.css';
import { joinMission } from '../../redux/mission/MissionsSlice';

const Missions = () => {
  const { allMissions, loading, error } = useSelector((store) => store.allMissions);
  const dispatch = useDispatch();

  if (allMissions.length !== 0) {
    return (
      <section className="mission-container">
        <table className={style.table}>
          <thead>
            <tr className={style.row}>
              <th className={style.column}>Mission</th>
              <th className={style.column}>Description</th>
              <th className={style.column}>Status</th>
              <th className={style.column}>{ ' '}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.cell}>Thaicom</td>
              <td className={style.cell}>Thaicom is the name of series communications satellite</td>
              <td className={style.cell}>Not A Member</td>
              <td className={style.cell}>
                <button type="button" className={style.joinMissions} onClick={() => dispatch(joinMission())}>{}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
  if (loading) {
    return (
      <p> Missions are loading!</p>
    );
  }
  if (error) {
    return (
      <p>Something is incorrct</p>
    );
  }
  return (
    <p>Missions are not available.</p>
  );
};

export default Missions;
