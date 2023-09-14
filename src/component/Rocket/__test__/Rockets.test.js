/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketsList from '../RocketsList';
import { reserveRocket, cancelReservation } from '../../../redux/rocket/rocketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RocketsList component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockProps = {
    name: 'Falcon 9',
    description: 'Sample description',
    image: 'rocket-image-url',
    id: 'rocket-id',
    reserved: false,
  };

  test('renders Rocket name and description', () => {
    render(<RocketsList {...mockProps} />);

    const rocketName = screen.getByText(mockProps.name);
    const rocketDescription = screen.getByText(mockProps.description);

    expect(rocketName).toBeInTheDocument();
    expect(rocketDescription).toBeInTheDocument();
  });

  test('renders Reserve Rocket button when not reserved', () => {
    render(<RocketsList {...mockProps} />);

    const reserveButton = screen.getByText('Reserve Rocket');

    expect(reserveButton).toBeInTheDocument();
  });

  test('renders Cancel Reservation button when reserved', () => {
    const reservedProps = {
      ...mockProps,
      reserved: true,
    };

    render(<RocketsList {...reservedProps} />);

    const cancelReservationButton = screen.getByText('Cancel Reservation');

    expect(cancelReservationButton).toBeInTheDocument();
  });

  test('dispatches reserveRocket action when Reserve Rocket button is clicked', () => {
    render(<RocketsList {...mockProps} />);

    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(reserveRocket(mockProps.id));
  });

  test('dispatches cancelReservation action when Cancel Reservation button is clicked', () => {
    const reservedProps = {
      ...mockProps,
      reserved: true,
    };

    render(<RocketsList {...reservedProps} />);

    const cancelReservationButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelReservationButton);

    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation(mockProps.id));
  });
});
