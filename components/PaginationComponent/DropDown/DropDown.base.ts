import { css } from 'styled-components';

export const baseStyles = {
  inputWrapper: css`
    width: 60px;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 40px;
  `,
  select: css<{ disabled?: boolean }>`
    width: 100%;
    border: none;
    background: #fff;
    font-family: Rubik-Regular;
    color: #323232;
    font-size: 14px;
    appearance: none;
  `,
  iconWrapper: css`
    position: absolute;
    top: 12px;
    right: 5%;
  `
};
