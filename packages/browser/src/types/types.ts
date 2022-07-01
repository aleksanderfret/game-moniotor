import { ChangeEvent, Dispatch as ReactDispatch } from 'react';

export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export type ButtonOnClickHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export interface Action {
  type: any;
  payload: any;
}

export type Dispatch<T extends Action> = ReactDispatch<T>;
