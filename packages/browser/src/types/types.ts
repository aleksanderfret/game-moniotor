import { ChangeEvent } from 'react';

export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export type ButtonOnClickHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
