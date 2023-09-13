/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import style from './RocketsList.module.css';

import { reserveRocket, cancelReservation } from '../../redux/rocket/rocketSlice';

const RocketsList = (props) => {
  const {
    name, description, image, id, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
  };

  const cancelReservationHandler = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <Col className={style.rocketsContainer}>
      <div className={style.rocketImg}>
        <img src={image} alt="rocket-img" />
      </div>
      <div className={style.rocketDesc}>
        <h4 className={style.rocketName}>
          {name}
        </h4>
        { reserved ? (
          <div>
            <p>
              <Badge bg="info">
                Reserved
              </Badge>
              <span className={style.rockDesc}>{description}</span>
            </p>
            <Button variant="light" onClick={cancelReservationHandler}>Cancel Reservation</Button>
          </div>
        ) : (
          <div>
            <p>{description}</p>
            <Button variant="primary" onClick={reserveRocketHandler}>Reserve Rocket</Button>
          </div>
        )}
      </div>
    </Col>
  );
};

RocketsList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsList;
