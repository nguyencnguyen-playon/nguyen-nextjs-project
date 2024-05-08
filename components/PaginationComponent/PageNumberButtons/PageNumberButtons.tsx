import styled from 'styled-components';
import React from 'react';
import { styles } from './PageNumberButtons.styles';

const PageNumberButtonsContainer = styled.div<{ margin: string }>`
  ${styles.pageNumberButtonsContainer}
`;

const PageNumberButton = styled.button<{ active: boolean; btnBackgroundColor: string }>`
  ${styles.pageNumberButton}
`;

const PageNumberText = styled.div<{ active: boolean; color: string }>`
  ${styles.pageNumberText}
`;

const NavigatePageButton = styled.button`
  ${styles.navigatePageButton}
`;

const NavigatePageText = styled.div<{ disabled: boolean }>`
  ${styles.navigatePageText}
`;

type PageNumberButtonsProps = {
  margin: string;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  endPage: number;
  startPage: number;
  btnBackgroundColor: string;
  textBtnColor: string;
  totalPages: number;
};

export const PageNumberButtons = ({
  margin,
  currentPage,
  handlePageChange,
  endPage,
  startPage,
  btnBackgroundColor,
  textBtnColor,
  totalPages
}: PageNumberButtonsProps) => {
  if (endPage === startPage) {
    return;
  }
  return (
    <PageNumberButtonsContainer margin={margin}>
      <NavigatePageButton disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        <NavigatePageText disabled={currentPage === 1}>
          {'<'}
        </NavigatePageText>
      </NavigatePageButton>

      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageNumber = startPage + index;
        return (
          <PageNumberButton
            key={`page-${pageNumber}`}
            onClick={() => handlePageChange(pageNumber)}
            active={pageNumber === currentPage}
            btnBackgroundColor={btnBackgroundColor}
          >
            <PageNumberText color={textBtnColor} active={pageNumber === currentPage}>
              {pageNumber}
            </PageNumberText>
          </PageNumberButton>
        );
      })}
      <NavigatePageButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
      >
        <NavigatePageText disabled={currentPage === totalPages}>
          {'>'}
        </NavigatePageText>
      </NavigatePageButton>
    </PageNumberButtonsContainer>
  );
};
