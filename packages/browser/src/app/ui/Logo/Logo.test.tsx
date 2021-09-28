import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '__tests__/utils/render';
import Logo from './Logo';

describe('<Logo />', () => {
  test('should render', () => {
    render(<Logo />);

    expect(screen.getByRole('img', { name: 'Games Room' })).toBeVisible();
  });

  test('should render in small size', () => {
    render(<Logo />);

    expect(screen.getByTestId('logo')).toHaveStyle({
      height: '3rem'
    });
  });

  test('should render in medium size', () => {
    render(<Logo size="medium" />);

    expect(screen.getByTestId('logo')).toHaveStyle({
      height: '6rem'
    });
  });

  test('should render in big size', () => {
    render(<Logo size="big" />);

    expect(screen.getByTestId('logo')).toHaveStyle({
      height: '9rem'
    });
  });

  test('should render in large size', () => {
    render(<Logo size="large" />);

    expect(screen.getByTestId('logo')).toHaveStyle({
      height: '12rem'
    });
  });
});
