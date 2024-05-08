import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from '../DropDown';

const props = {
    options: [{ label: '10', value: '10' }, { label: '20', value: '20' }],
    selectedValue: '10',
    onValueChange: jest.fn()
};

describe('Test Dropdown Web component ', () => {
    test('should match its snapshot', async () => {
        const component = render(<Dropdown {...props} />);
        expect(component).toMatchSnapshot();
    });
});
