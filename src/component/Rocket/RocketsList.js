/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import style from './RocketsList.module.css';

import { reserveRocket } from '../../redux/rocket/rocketSlice';

const RocketsList = (props) => {
  const {
    name, description, image, id,
  } = props;

  const dispatch = useDispatch();

  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
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
        <p className={style.rocketType}>
          {description}
        </p>
        <Button type="button" onClick={reserveRocketHandler}>Reserve Rocket</Button>
      </div>
    </Col>
  );
};

RocketsList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RocketsList;
