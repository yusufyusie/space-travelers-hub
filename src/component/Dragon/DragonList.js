import './dragon.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function DrgaonList(props) {
  const {
    id, name, type, image,
  } = props;
  return (
    <li>
      <div key={id}>
        <img className="dragonimage" src={image} alt="" />
        <div>{name}</div>
        <div>{type}</div>
        <button type="button">Reserve Dragon</button>
      </div>
    </li>
  );
}
DrgaonList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
