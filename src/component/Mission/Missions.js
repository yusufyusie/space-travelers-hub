import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Missions.module.css';
import { joinMission, getAllMissions } from '../../redux/mission/MissionsSlice';

const Missions = () => {
  const { allMissions, loading, error } = useSelector((store) => store.allMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allMissions.length === 0) {
      dispatch(getAllMissions());
    }
  }, [dispatch, allMissions.length]);
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
            {allMissions.map((m) => (
              <tr key={m.mission_id}>
                <td className={style.cell}>{m.mission_name}</td>
                <td className={style.cell}>{m.description}</td>
                <td className={style.cell}>
                  {m.reserved ? (
                    <span className={style.member}>active member</span>
                  ) : (<span className={style.not_member}>not a member</span>)}
                </td>
                <td className={style.cell}>
                  <button type="button" className={style.joinMissions} onClick={() => dispatch(joinMission(m.mission_id))}>
                    {m.reserved ? (
                      'leave mission'
                    ) : ('join mission')}
                  </button>
                </td>
              </tr>
            ))}
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
