/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const ReservedRocketList = (props) => {
  const {
    reserved, name,
  } = props;

  return (
    <>
      { reserved && name }
    </>
  );
};

ReservedRocketList.propTypes = {
  reserved: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default ReservedRocketList;
