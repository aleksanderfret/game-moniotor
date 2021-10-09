import styled from 'styled-components';

import { StyledButtonProps } from './types';

export const PrimaryButton = styled.button<StyledButtonProps>`
  position: relative;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrast};
  box-sizing: border-box;
  outline: 0;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.palette.gray[400] : theme.palette.primary.main};
  white-space: nowrap;
  height: ${({ size, theme }) => theme.size.calc(size)};
  max-height: ${({ size, theme }) => theme.size.calc(size)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.size.calc(1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ theme }) => theme.shadows.init};
  ${({ theme }) =>
    theme.transition(
      'color',
      'background-color',
      'border-color',
      'box-shadow',
      'transform'
    )};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    border-color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-color: ${({ theme }) => theme.palette.primary.light};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.palette.background.light};
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.primary.main};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.tint(theme.palette.primary.dark, 85)};
    border-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.tint(theme.palette.primary.dark, 80)};
    border-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.danger.dark};
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.palette.gray[400] : theme.palette.danger.main};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.danger.dark};
    border-color: ${({ theme }) => theme.palette.danger.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.danger.light};
    border-color: ${({ theme }) => theme.palette.danger.light};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focusDanger};
  }
`;
