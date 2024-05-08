import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

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

describe('Header', () => {
    test('renders header with correct text', () => {
        render(<Header />);

        const homeText = screen.getByText('Home');
        expect(homeText).toBeTruthy();
    });
    test('renders correctly', () => {
        const component = render(<Header />);
        expect(component).toMatchSnapshot();
    });
});
