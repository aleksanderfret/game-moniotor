import styled from 'styled-components';

import { AsyncContentBoxProps, StyledButtonProps } from './types';

export const PrimaryButton = styled.button<StyledButtonProps>`
  position: relative;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[400] : theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrast};
  box-sizing: border-box;
  outline: 0;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.gray[400] : theme.colors.primary.main};
  white-space: nowrap;
  height: ${({ size, theme }) => theme.mixins.size(size)};
  max-height: ${({ size, theme }) => theme.mixins.size(size)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.mixins.size(1)};
  cursor: ${({ disabled, loading }) =>
    disabled ? 'not-allowed' : loading ? 'initial' : 'pointer'};
  box-shadow: ${({ theme }) => theme.shadows.init};
  ${({ theme }) =>
    theme.mixins.transition(
      'color',
      'background-color',
      'border-color',
      'box-shadow',
      'transform'
    )};

  &:hover:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'dark']};
    border-color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'dark']};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'light']};
    border-color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'light']};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[400] : theme.colors.primary.main};

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    border-color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'dark']};
    color: ${({ loading, theme }) =>
      theme.colors.primary[loading ? 'main' : 'dark']};
  }

  &:hover:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      loading
        ? theme.colors.background.light
        : theme.mixins.tint(theme.colors.primary.dark, 85)};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      loading
        ? theme.colors.background.light
        : theme.mixins.tint(theme.colors.primary.dark, 80)};
  }
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[400] : theme.colors.danger.main};
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.gray[400] : theme.colors.danger.main};

  &:hover:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.colors.danger[loading ? 'main' : 'dark']};
    border-color: ${({ loading, theme }) =>
      theme.colors.danger[loading ? 'main' : 'dark']};
  }

  &:active:not(:disabled) {
    background-color: ${({ loading, theme }) =>
      theme.colors.danger[loading ? 'main' : 'light']};
    border-color: ${({ loading, theme }) =>
      theme.colors.danger[loading ? 'main' : 'light']};
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
