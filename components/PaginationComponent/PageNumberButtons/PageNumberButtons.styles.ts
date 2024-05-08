import { css } from 'styled-components';

export const styles = {
  pageNumberButtonsContainer: css<{ margin: string }>`
    display: flex;
    flex-direction: row;
  `,
  pageNumberButton: css<{ active: boolean; btnBackgroundColor: string }>`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 40px;
    border: 1px solid #dbdbdb;
    background-color: ${({ active, btnBackgroundColor }) => (active ? btnBackgroundColor : 'white')};
  `,
  pageNumberText: css<{ active: boolean; color: string }>`
    font-weight: 700;
    color: ${({ active, color }) => (active ? color : '#000')};
  `,
  navigatePageButton: css`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #dbdbdb;
    background-color: white;
  `,
  navigatePageText: css<{ disabled: boolean }>`
    font-weight: 700;
    color: ${({ disabled }) => (disabled ? '#dbdbdb' : '#000')};
  `
};
