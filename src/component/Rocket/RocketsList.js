/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import style from './RocketsList.module.css';

const RocketsList = (props) => {
  const {
    name, description, image,
  } = props;

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
        <Button>Reserve Rocket</Button>
      </div>
    </Col>
  );
};

RocketsList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};

export default RocketsList;
