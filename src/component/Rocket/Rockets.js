import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket } from '../../redux/rocket/rocketSlice';
import RocketsList from './RocketsList';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);

  return (
    <>
      <ul className="rockets">
        {
          rockets.map((rocket) => (
            <li key={rocket.id} className="rocketList">
              <RocketsList
                name={rocket.name}
                description={rocket.description}
                image={rocket.flickr_images[0]}
              />
            </li>
          ))
        }
      </ul>
    </>
  );
}
