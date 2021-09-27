import React from 'react';

import { render } from '__tests__/utils/render';
import Logo from './Logo';

describe('<Logo />', () => {
  test('should render', () => {
    const { getByRole } = render(<Logo />);

    expect(getByRole('img', { name: 'Games Room' })).toBeVisible();
  });

  test('should render in small size', () => {
    const { getByTestId } = render(<Logo />);

    expect(getByTestId('logo')).toHaveStyle({
      height: '3rem'
    });
  });

  test('should render in medium size', () => {
    const { getByTestId } = render(<Logo size="medium" />);

    expect(getByTestId('logo')).toHaveStyle({
      height: '6rem'
    });
  });

  test('should render in big size', () => {
    const { getByTestId } = render(<Logo size="big" />);

    expect(getByTestId('logo')).toHaveStyle({
      height: '9rem'
    });
  });

  test('should render in large size', () => {
    const { getByTestId } = render(<Logo size="large" />);

    expect(getByTestId('logo')).toHaveStyle({
      height: '12rem'
    });
  });
});
