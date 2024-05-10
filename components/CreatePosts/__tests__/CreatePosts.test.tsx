import { render } from '@testing-library/react';
import { CreatePosts } from '../CreatePosts';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn()
}));

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

describe('CreatePosts', () => {
    test('renders without errors', () => {
        const component = render(<CreatePosts />);
        expect(component).toMatchSnapshot();
    });
});
