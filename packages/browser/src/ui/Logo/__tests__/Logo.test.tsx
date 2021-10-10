import React from 'react';
import { screen } from '@testing-library/react';

import render from '__tests__/utils/render';
import Logo from 'ui/Logo';

describe('<Logo />', () => {
  test('should render', () => {
    render(<Logo />);

    expect(screen.getByRole('img', { name: 'Games Room' })).toBeVisible();
  });

  test('should render simple logo', () => {
    const { asFragment } = render(<Logo variant="simple" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render simple logo', () => {
    const { asFragment } = render(<Logo variant="horizontal" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render simple logo', () => {
    const { asFragment } = render(<Logo variant="vertical" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
