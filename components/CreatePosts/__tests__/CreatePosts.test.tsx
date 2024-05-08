import { render } from '@testing-library/react';
import { CreatePosts } from '../CreatePosts';

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn()
}));

describe('CreatePosts', () => {
    test('renders without errors', () => {
        const component = render(<CreatePosts />);
        expect(component).toMatchSnapshot();
    });
});
