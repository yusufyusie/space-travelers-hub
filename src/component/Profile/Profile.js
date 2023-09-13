/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ReservedRocketList from './ReservedRocketList';
import style from './Profile.module.css';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const { totalDragons } = useSelector((state) => state.dragon);
  const { allMissions } = useSelector((store) => store.allMissions);

  const joinedMissions = allMissions.filter((mission) => mission.joined === true);

  return (
    <Container fluid className={style.container}>
      <div className={style.rocketSection}>
        <h4>My Rockets</h4>
        <ListGroup className={style.rocketList}>
          {rockets
            .filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <ListGroup.Item key={rocket.id}>
                <ReservedRocketList
                  key={rocket.id}
                  name={rocket.name}
                />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className={style.rocketSection}>
        <h4>My Dragons</h4>
        <ListGroup className={style.rocketList}>
          {totalDragons
            .filter((dragon) => dragon.reserved)
            .map((dragon) => (
              <ListGroup.Item key={dragon.id}>
                <ReservedRocketList
                  key={dragon.id}
                  name={dragon.name}
                />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className={style.missionsList}>
        <h2 className={style.listTitle}>My Missions</h2>
        {joinedMissions.length === 0
          ? <p>No joined missions</p> : (
            <ul>
              {joinedMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          )}
      </div>
    </Container>
  );
}
