/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import RocketsList from './RocketsList';
import { fetchRocket } from '../../redux/rocket/rocketSlice';

export default function Rockets() {
  const { loading, rockets, error } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocket());
    }
  }, [dispatch, rockets.length]);

  return (
    <Container fluid>
      {loading && <div>loading...</div>}
      {!loading && error && (
        <div>
          Error:
          {' '}
          {error}
        </div>
      )}
      {!loading && rockets.length > 0 && (
        rockets.map((rocket) => (
          <Row key={rocket.id} className="rocketList">
            <RocketsList
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.flickr_images[0]}
              reserved={rocket.reserved}
            />
          </Row>
        ))
      )}
    </Container>
  );
}
