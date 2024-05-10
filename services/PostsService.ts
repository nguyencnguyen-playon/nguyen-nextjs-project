import { PostFormType } from "@/interfaces";

export const fetchPosts = async () => {
    const posts = await fetch(`/api/views/post`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const res = await posts.json();
    return res;
}

export const createPosts = async (data: PostFormType) => {
    await fetch(`/api/views/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, image_url: `https://picsum.photos/${Math.floor(Math.random() * 1000)}`, id: Date.now().toString() }),
    });
};