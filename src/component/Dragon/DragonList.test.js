import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import DragonList from './DragonList';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('DrgaonList Component', () => {
  it('renders all first before reserved', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const dragon = {
      id: '1',
      name: 'Dragon1',
      type: 'capsule',
      image: ' ',
      reserved: false,
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const { getByText, getByTestId } = render(<DragonList {...dragon} />);

    expect(getByText('Dragon1')).toBeInTheDocument();
    expect(getByText('capsule')).toBeInTheDocument();
    expect(getByTestId('reserve-btn')).toBeInTheDocument();
  });

  it('renders with cancel button after reserved', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const dragon = {
      id: '1',
      name: 'Dragon1',
      type: 'capsule',
      image: ' ',
      reserved: true,
    };
    /* eslint-disable react/jsx-props-no-spreading */
    const { getByText, getByTestId } = render(<DragonList {...dragon} />);

    expect(getByText('Dragon1')).toBeInTheDocument();
    expect(getByText('capsule')).toBeInTheDocument();
    expect(getByTestId('cancel-btn')).toBeInTheDocument();
  });
});
