import styled from 'styled-components';

import { AsyncContentBoxProps } from './types';

export const PrimaryButton = styled.button`
  position: relative;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrast};
  box-sizing: border-box;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.mixins.size(1)};
  cursor: 'pointer';
  box-shadow: ${({ theme }) => theme.shadows.init};
  ${({ theme }) =>
    theme.mixins.transition(
      'color',
      'background-color',
      'border-color',
      'box-shadow',
      'transform'
    )};

  &:disabled:not(.loading) {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    cursor: 'not-allowed';
  }

  &.loading:not(:disabled) {
    cursor: 'initial';
  }

  &.small {
    height: ${({ theme }) => theme.mixins.size(2)};
    max-height: ${({ theme }) => theme.mixins.size(2)};
  }

  &.medium {
    height: ${({ theme }) => theme.mixins.size(2.5)};
    max-height: ${({ theme }) => theme.mixins.size(2.5)};
  }

  &.big {
    height: ${({ theme }) => theme.mixins.size(3)};
    max-height: ${({ theme }) => theme.mixins.size(3)};
  }

  &:hover:not(:disabled):not(.loading) {
    background-color: ${({ theme }) => theme.colors.primary['dark']};
    border-color: ${({ theme }) => theme.colors.primary['dark']};
  }

  &:active:not(:disabled):not(.loading) {
    background-color: ${({ theme }) => theme.colors.primary['light']};
    border-color: ${({ theme }) => theme.colors.primary['light']};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.primary.main};

  &:disabled:not(.loading) {
    background-color: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:hover:not(:disabled):not(.loading),
  &:active:not(:disabled):not(.loading) {
    border-color: ${({ theme }) => theme.colors.primary['dark']};
    color: ${({ theme }) => theme.colors.primary['dark']};
  }

  &:hover:not(:disabled):not(.loading) {
    background-color: ${({ theme }) =>
      theme.mixins.tint(theme.colors.primary.dark, 85)};
  }

  &:active:not(:disabled):not(.loading) {
    background-color: ${({ theme }) =>
      theme.mixins.tint(theme.colors.primary.dark, 80)};
  }
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.danger.main};
  border: 1px solid ${({ theme }) => theme.colors.danger.main};

  &:disabled:not(.loading) {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  }

  &:hover:not(:disabled):not(.loading) {
    background-color: ${({ theme }) => theme.colors.danger['dark']};
    border-color: ${({ theme }) => theme.colors.danger['dark']};
  }

  &:active:not(:disabled):not(.loading) {
    background-color: ${({ theme }) => theme.colors.danger['light']};
    border-color: ${({ theme }) => theme.colors.danger['light']};
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

  &.loading {
    visibility: collapse;
    user-select: none;
  }
`;
