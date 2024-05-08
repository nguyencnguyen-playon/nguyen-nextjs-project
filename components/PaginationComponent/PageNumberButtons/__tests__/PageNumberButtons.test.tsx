import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageNumberButtons } from '../PageNumberButtons';

describe('PageNumberButtons', () => {
    const handlePageChangeMock = jest.fn();

    const defaultProps = {
        margin: '10px',
        currentPage: 1,
        handlePageChange: handlePageChangeMock,
        endPage: 10,
        startPage: 1,
        btnBackgroundColor: 'blue',
        textBtnColor: 'white',
        totalPages: 10,
    };

    it('should match snapshot', () => {
        const component = render(<PageNumberButtons {...defaultProps} />);
        expect(component).toMatchSnapshot();
    })

    it('renders the page number buttons correctly', () => {
        const { getByText } = render(<PageNumberButtons {...defaultProps} />);

        for (let i = defaultProps.startPage; i <= defaultProps.endPage; i++) {
            const pageNumberButton = getByText(i.toString());
            expect(pageNumberButton).toBeTruthy();
        }
    });

    it('calls handlePageChange when a page number button is clicked', () => {
        const { getByText } = render(<PageNumberButtons {...defaultProps} />);

        const pageNumberButton = getByText('2');
        fireEvent.click(pageNumberButton);

        expect(handlePageChangeMock).toHaveBeenCalledWith(2);
    });
});
