import styled from 'styled-components';

import { AsyncContentBoxProps, StyledButtonProps } from './types';

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
  cursor: ${({ disabled, loading }) =>
    disabled ? 'not-allowed' : loading ? 'initial' : 'pointer'};
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
    background-color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'dark']};
    border-color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'dark']};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'light']};
    border-color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'light']};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.palette.background.light};
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.primary.main};

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    border-color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'dark']};
    color: ${({ loading, theme }) =>
      theme.palette.primary[loading ? 'main' : 'dark']};
  }

  &:hover:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      loading
        ? theme.palette.background.light
        : theme.tint(theme.palette.primary.dark, 85)};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      loading
        ? theme.palette.background.light
        : theme.tint(theme.palette.primary.dark, 80)};
  }
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.danger.main};
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.palette.gray[400] : theme.palette.danger.main};

  &:hover:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.palette.danger[loading ? 'main' : 'dark']};
    border-color: ${({ loading, theme }) =>
      theme.palette.danger[loading ? 'main' : 'dark']};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.palette.danger[loading ? 'main' : 'light']};
    border-color: ${({ loading, theme }) =>
      theme.palette.danger[loading ? 'main' : 'light']};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focusDanger};
  }
`;

export const AsyncContentBox = styled.span<AsyncContentBoxProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ loading }) => (loading ? 'collapse' : 'initial')};
  user-select: ${({ loading }) => (loading ? 'none' : 'auto')};
`;
