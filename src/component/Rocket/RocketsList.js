// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const RocketsList = (props) => {
  const {
    name, description, image,
  } = props;

  return (
    <div className="rocketsContainer">
      <div className="rocketImg">
        <img src={image} alt="rocket-img" />
      </div>
      <div className="rocketDesc">
        <h2 className="rocketName">
          {name}
        </h2>
        <p className="rocketType">
          {description}
        </p>
      </div>
    </div>
  );
};

RocketsList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketsList;
