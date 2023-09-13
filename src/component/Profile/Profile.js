/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ReservedRocketList from './ReservedRocketList';
import style from './Profile.module.css';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets);

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
    </Container>
  );
}
