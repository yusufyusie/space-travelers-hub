/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const ReservedRocketList = (props) => {
  const {
    name,
  } = props;

  return (
    <>
      { name }
    </>
  );
};

ReservedRocketList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReservedRocketList;
