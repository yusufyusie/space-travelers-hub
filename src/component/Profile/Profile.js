/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ReservedRocketList from './ReservedRocketList';
import style from './Profile.module.css';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <Container fluid className={style.container}>
      <div className={style.rocketSection}>
        <h4>My Rockets</h4>
        <ul className={style.rocketList}>
          {
            rockets.map((rocket) => (
              <li key={rocket.id}>
                <ReservedRocketList
                  key={rocket.id}
                  name={rocket.name}
                  reserved={rocket.reserved}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </Container>
  );
}
