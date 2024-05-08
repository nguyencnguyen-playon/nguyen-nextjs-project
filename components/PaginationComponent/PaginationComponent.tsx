import styled from 'styled-components';
import React from 'react';
import { Dropdown } from './DropDown';
import { PageNumberButtons } from './PageNumberButtons';
import { styles } from './PaginationComponent.styles';

const Wrapper = styled.div`
  ${styles.wrapper}
`;

const ButtonsSection = styled.div<{ align: string }>`
  ${styles.buttonsSection}
`;

const DropdownSection = styled.div`
  ${styles.dropdownSection}
`;

const ListItemsContainer = styled.div`
  ${styles.listItemsContainer}
`;

export const PageRanges = (currentPage = 0, totalPages = 1) => {
    if (totalPages <= 3) {
        return [1, totalPages];
    }

    if (currentPage === 1) {
        return [1, 3];
    }

    // If we are in the last page, show the last 3 pages
    if (currentPage === totalPages) {
        return [totalPages - 2, totalPages];
    }

    return [currentPage - 1, currentPage + 1];
};

type PaginationComponentProps = {
    currentPage: number;
    totalPages?: number;
    pageSize?: number;
    data: any[];
    onChange: (newPage: number) => void;
    onPageSizeChange: (newPageSize: string) => void;
    renderItems: (items: any, index: number) => React.ReactNode;
    isPaginationEnabled?: boolean;
    btnBackgroundColor?: string;
    textBtnColor?: string;
};

export const PaginationComponent = ({
    currentPage,
    totalPages = 1,
    pageSize = 10,
    data,
    onChange,
    onPageSizeChange,
    renderItems,
    isPaginationEnabled,
    btnBackgroundColor = '#ffffff',
    textBtnColor = '#000000'
}: PaginationComponentProps) => {
    const handlePageChange = (newPage: number) => {
        onChange(newPage);
    };

    const [startPage, endPage] = PageRanges(currentPage, totalPages);
    /* Render page number buttons */

    return !isPaginationEnabled ? (
        <ListItemsContainer data-testid='pagination-component-disabled'>
            {data.map((item, index) => renderItems(item, index))}
        </ListItemsContainer>
    ) : (
        <Wrapper data-testid='pagination-component'>
            <ButtonsSection align='space-between'>
                <DropdownSection>
                    <Dropdown
                        onValueChange={pageSize => onPageSizeChange(pageSize)}
                        selectedValue={pageSize?.toString() || '5'}
                        options={[5, 10, 20].map(opt => ({
                            label: opt.toString() || '',
                            value: opt.toString() || ''
                        }))}
                    ></Dropdown>
                </DropdownSection>
                <PageNumberButtons
                    margin='0 0 10px 0'
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                    textBtnColor={textBtnColor}
                    btnBackgroundColor={btnBackgroundColor}
                    endPage={endPage}
                    startPage={startPage}
                />
            </ButtonsSection>
            <ListItemsContainer>
                {data.map((item, index) => renderItems(item, index))}
            </ListItemsContainer>
            <ButtonsSection align='flex-end'>
                <PageNumberButtons
                    margin='10px 0 0 0'
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                    textBtnColor={textBtnColor}
                    btnBackgroundColor={btnBackgroundColor}
                    endPage={endPage}
                    startPage={startPage}
                />
            </ButtonsSection>
        </Wrapper>
    );
};
