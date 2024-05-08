import { render } from '@testing-library/react';
import { LayoutContent } from '../LayoutContent';

jest.mock('@clerk/nextjs', () => ({
    ...jest.requireActual('@clerk/nextjs'),
    useUser: jest.fn().mockImplementation(() => ({
        user: null
    })),
    useClerk: jest.fn().mockImplementation(() => ({
        signOut: jest.fn()
    })),
    SignedIn: () => <div />,
    UserButton: () => <div />
}));

describe('LayoutContent', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <LayoutContent>
                <div>Test Content</div>
            </LayoutContent>
        );

        expect(getByText('Test Content')).toBeTruthy();
    });
});
