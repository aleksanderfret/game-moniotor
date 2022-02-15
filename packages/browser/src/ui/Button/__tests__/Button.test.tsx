import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import render from '__tests__/utils/render';
import Button from 'ui/Button/Button';

describe('<Button />', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render', () => {
    render(<Button>Confirm</Button>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  test('is enabled', () => {
    render(<Button>Confirm</Button>);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('is disabled', () => {
    render(<Button disabled>Confirm</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('is disabled when loading', () => {
    render(<Button loading>Confirm</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Confirm</Button>);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();

    render(
      <Button disabled onClick={handleClick}>
        Confirm
      </Button>
    );

    const button = screen.getByRole('button');

    expect(() => userEvent.click(button)).toThrow();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test('behaves correctly when loading', () => {
    const handleClick = jest.fn();

    render(
      <Button loading onClick={handleClick}>
        Confirm
      </Button>
    );

    const button = screen.getByRole('button');

    expect(screen.getByRole('progressbar')).toBeVisible();

    expect(button).toBeDisabled();

    expect(() => userEvent.click(button)).toThrow();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
