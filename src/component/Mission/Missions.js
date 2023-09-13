import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Missions.module.css';

const Missions = () => {
  const { allMissions, isLoading, error } = useSelector((store) => store.allMissions);
  const dispatch = useDispatch();

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
            <td className={style.cell}>Join Mission</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Missions;
