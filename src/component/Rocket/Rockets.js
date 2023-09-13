/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import RocketsList from './RocketsList';
import { fetchRocket } from '../../redux/rocket/rocketSlice';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  return (
    <Container fluid>
      {
        rockets.map((rocket) => (
          <Row key={rocket.id} className="rocketList">
            <RocketsList
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.flickr_images[0]}
              reserved={rocket.reserved}
            />
          </Row>
        ))
      }
    </Container>
  );
}
