import { css } from 'styled-components';
import { baseStyles } from './DropDown.base';

export const styles = {
  ...baseStyles,
  select: css<{ disabled?: boolean }>`
    ${baseStyles.select};
    height: 100%;
    width: 100%;
    padding-left: 25%;
    ${({ disabled }) => disabled && 'cursor: not-allowed'};
  `
};
