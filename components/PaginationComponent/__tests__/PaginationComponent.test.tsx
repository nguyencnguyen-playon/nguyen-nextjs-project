import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageRanges, PaginationComponent } from '../PaginationComponent';
describe('PaginationComponent', () => {
    const mockData = [
        {
            "id": 1715015431309,
            "desc": "45454",
            "name": "5454545",
            "image_url": "https://picsum.photos/992"
        },
        {
            "id": 1715179628607,
            "desc": "web8",
            "name": "web8",
            "image_url": "https://picsum.photos/459"
        }
    ];
    const mockOnChange = jest.fn();
    const mockOnPageSizeChange = jest.fn();
    const mockRenderItems = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly with default props', () => {
        const component = render(
            <PaginationComponent
                currentPage={1}
                data={mockData}
                onChange={mockOnChange}
                onPageSizeChange={mockOnPageSizeChange}
                renderItems={mockRenderItems}
                totalPages={2}
                isPaginationEnabled
            />
        );

        // Add your assertions here to check if the component renders correctly
        // For example:
        expect(component).toMatchSnapshot();
    });

    it('calls onChange when page number is clicked', () => {
        const { getAllByText } = render(
            <PaginationComponent
                currentPage={1}
                data={mockData}
                onChange={mockOnChange}
                onPageSizeChange={mockOnPageSizeChange}
                renderItems={mockRenderItems}
                totalPages={2}
                isPaginationEnabled
            />
        );
        const elements = getAllByText('1');
        elements.forEach(element => {
            fireEvent.click(element)
        });

        expect(mockOnChange).toHaveBeenCalledWith(1);
    });

    it('should not render pagination layout with isPaginationEnabled = false', () => {
        const { getByTestId } = render(
            <PaginationComponent
                currentPage={1}
                data={mockData}
                onChange={mockOnChange}
                onPageSizeChange={mockOnPageSizeChange}
                renderItems={mockRenderItems}
                totalPages={2}
                isPaginationEnabled={false}
            />
        );

        expect(getByTestId('pagination-component-disabled')).toBeTruthy();
    })

    it('should render pagination layout with isPaginationEnabled = true', () => {
        const { getByTestId } = render(
            <PaginationComponent
                currentPage={1}
                data={mockData}
                onChange={mockOnChange}
                onPageSizeChange={mockOnPageSizeChange}
                renderItems={mockRenderItems}
                isPaginationEnabled
            />
        );

        expect(getByTestId('pagination-component')).toBeTruthy();
    })

    it('result PageRanges return should be correctly', () => {
        const result = PageRanges(1, 10);
        expect(result).toEqual([1, 3]);

    })
    it('should return last 3 pages when currentPage is the last page', () => {
        const result = PageRanges(10, 10);
        expect(result).toEqual([8, 10]);
    })
    it('should call handlePageChange when page number is clicked', () => {
        const { getAllByText } = render(
            <PaginationComponent
                currentPage={1}
                data={mockData}
                onChange={mockOnChange}
                onPageSizeChange={mockOnPageSizeChange}
                renderItems={mockRenderItems}
                isPaginationEnabled
                totalPages={2}
            />
        );
        const elements = getAllByText('1');
        elements.forEach(element => {
            fireEvent.click(element)
        });

        expect(mockOnChange).toHaveBeenCalledWith(1);
    });
});
