import './dragon.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import DragonList from './DragonList';
import { fetchDragons } from '../../redux/dragon/dragonSlice';

export default function Dragons() {
  const { totalDragons } = useSelector((state) => state.dragon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);
  return (
    <ul className="dragon-container">
      {totalDragons.map((dragon) => (
        <DragonList
          key={dragon.id}
          id={dragon.id}
          name={dragon.name}
          type={dragon.type}
          image={dragon.flickr_images}
        />
      ))}
    </ul>
  );
}
