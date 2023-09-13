/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux/es/hooks/useSelector';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ReservedRocketList from './ReservedRocketList';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <Container fluid>
      <ListGroup>
        {
          rockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>
              <ReservedRocketList
                key={rocket.id}
                name={rocket.name}
                reserved={rocket.reserved}
              />
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  );
}
