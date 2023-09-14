import './dragon.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, cancelDragon } from '../../redux/dragon/dragonSlice';

export default function DrgaonList(props) {
  const dispatch = useDispatch();
  const {
    id, name, type, image, reserved,
  } = props;
  return (
    <li className="dragon-list" key={id}>
      <img className="dragonimage" src={image} alt="" />
      <div className="about">
        <div className="dragon">{name}</div>
        {
          reserved ? (
            <div>
              <div>
                <span className="reserved">Reserved</span>
                <span className="type">{type}</span>
              </div>
              <button data-testid="cancel-btn" type="button" className="cancel" onClick={() => dispatch(cancelDragon(id))}>
                Cancle Reservation
              </button>
            </div>
          )
            : (
              <div>
                <div className="type">{type}</div>
                <button data-testid="reserve-btn" className="d-reserve" type="button" onClick={() => dispatch(reserveDragon(id))}>Reserve Dragon</button>
              </div>
            )
        }
      </div>
    </li>
  );
}
DrgaonList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
