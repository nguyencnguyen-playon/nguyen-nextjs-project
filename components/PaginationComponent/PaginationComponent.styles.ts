import { css } from 'styled-components';

export const styles = {
    wrapper: css`
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    padding: 32px;
    margin-top: 16px;
  `,
    buttonsSection: css<{ align: string }>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ align }) => align};
    align-items: center;
  `,
    dropdownSection: css`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    height: 100%;
  `,
    listItemsContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: 'flex-start';
    width: 100%;
    flex-wrap: wrap;
  `,
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
