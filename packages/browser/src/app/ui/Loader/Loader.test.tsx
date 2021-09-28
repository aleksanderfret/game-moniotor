import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '__tests__/utils/render';
import Loader from './Loader';

describe('<Loader />', () => {
  test('should render', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  test('should render in small size', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toHaveStyle({
      height: '1.5rem',
      width: '1.5rem'
    });
  });

  test('should render in big size', () => {
    render(<Loader size="xl" />);

    expect(screen.getByRole('progressbar')).toHaveStyle({
      height: '3rem',
      width: '3rem'
    });
  });
});
