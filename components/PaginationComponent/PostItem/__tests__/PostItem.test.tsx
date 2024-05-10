import { render } from '@testing-library/react';
import { PostItem } from '../PostItem';
import { IPost } from '@/interfaces';

describe('PostItem', () => {
    const mockPost: IPost = {
        name: 'Test Post',
        desc: 'Lorem ipsum',
        image_url: 'https://example.com/image.jpg',
    };

    const mockPostNoImage: IPost = {
        name: 'Test Post',
        desc: 'Lorem ipsum',
        image_url: '',
    };

    it('renders the post name and description', () => {
        const component = render(<PostItem item={mockPost} />);
        expect(component).toMatchSnapshot();
    });

    it('renders the post name and description', () => {
        const component = render(<PostItem item={mockPostNoImage} />);
        expect(component).toBeDefined();
    });
});
