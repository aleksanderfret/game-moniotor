import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { waitForElementToBeRemoved, within } from '@testing-library/dom';

import render from '__tests__/utils/render';
import { asyncResolved, caughtRejected } from '__mocks__/asyncFunctions';
import { AsyncButton } from 'ui/Button';

const onClickHandlers = {
  asyncResolved,
  caughtRejected
};

describe('<AsyncButton />', () => {
  test('should render', () => {
    render(<AsyncButton>Confirm</AsyncButton>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  test('is enabled', () => {
    render(<AsyncButton>Confirm</AsyncButton>);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('is disabled', () => {
    render(<AsyncButton disabled>Confirm</AsyncButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('is disabled when loading', () => {
    render(<AsyncButton loading>Confirm</AsyncButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  test('behave correctly on click when success', async () => {
    const buttonText = 'Confirm';
    const handler = jest.spyOn(onClickHandlers, 'asyncResolved');

    render(
      <AsyncButton onClick={onClickHandlers.asyncResolved}>
        {buttonText}
      </AsyncButton>
    );

    const button = screen.getByRole('button');

    const buttonContent = within(button).getByText(buttonText);

    expect(buttonContent).toHaveTextContent(buttonText);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    userEvent.click(button);

    const Loader = screen.getByRole('progressbar');

    expect(Loader).toBeVisible();

    expect(button).toBeDisabled();

    expect(button).toHaveClass('loading');

    expect(buttonContent).not.toBeVisible();

    userEvent.click(button);

    expect(handler).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    expect(buttonContent).toBeVisible();

    expect(button).not.toHaveClass('loading');

    expect(button).toBeEnabled();
  });

  test('behave correctly on click when failed', async () => {
    const buttonText = 'Confirm';
    const handler = jest.spyOn(onClickHandlers, 'caughtRejected');

    render(
      <AsyncButton onClick={onClickHandlers.caughtRejected}>
        {buttonText}
      </AsyncButton>
    );

    const button = screen.getByRole('button');

    const buttonContent = within(button).getByText(buttonText);

    expect(buttonContent).toHaveTextContent(buttonText);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    userEvent.click(button);

    const Loader = screen.getByRole('progressbar');

    expect(Loader).toBeVisible();

    expect(button).toBeDisabled();

    expect(button).toHaveClass('loading');

    expect(buttonContent).not.toBeVisible();

    userEvent.click(button);

    expect(handler).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    expect(buttonContent).toBeVisible();

    expect(button).not.toHaveClass('loading');

    expect(button).toBeEnabled();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
