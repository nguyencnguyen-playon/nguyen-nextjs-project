import styled from 'styled-components';
import React from 'react';

const PageNumberButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageNumberButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 40px;
  border: 1px solid #dbdbdb;
`;

const PageNumberText = styled.div`
  font-weight: 700;
  color: #000;
`;

const NavigatePageButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const NavigatePageText = styled.div<{ disabled: boolean }>`
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? '#dbdbdb' : '#000')};
`;

type PageNumberButtonsProps = {
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  endPage: number;
  startPage: number;
  totalPages: number;
};

export const PageNumberButtons = ({
  currentPage,
  handlePageChange,
  endPage,
  startPage,
  totalPages
}: PageNumberButtonsProps) => {
  if (endPage === startPage) {
    return;
  }
  return (
    <PageNumberButtonsContainer>
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
          >
            <PageNumberText>
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
