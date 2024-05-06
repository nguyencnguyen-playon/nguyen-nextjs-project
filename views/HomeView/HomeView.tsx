'use client'
import { LayoutContent } from '@/components/LayoutContent';
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: grey;
    flex:1;
    gap: 16px;
    margin: 16px;
`

const Text = styled.div`
    font-size: 24px;
    color: #000;
`

export const HomeView = () => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await fetch(`/api/views/post`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const res = await posts.json();
            setResponse(res);
            console.log('posts', res)

        }
        fetchPosts();
    }, [])
    console.log('res', response)
    return (
        <LayoutContent>
            {response?.length > 0 && response.map((post, index) => {
                return (<Container key={index}>
                    <img
                        src={post.image_url || 'https://placehold.co/500x500'}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    <Text>{post.name}</Text>
                    <Text>{post.desc}</Text>
                </Container>)
            })}
        </LayoutContent>
    );
}
