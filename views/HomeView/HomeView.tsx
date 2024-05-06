'use client'
import { LayoutContent } from '@/components/LayoutContent';
import { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin: 16px;
    width: 400px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

const Text = styled.div`
    font-size: 24px;
    color: #000;
`

const Wrapper = styled.div`
    display: flex;  
    flex:1;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #F7FAFC;
    overflow: auto;
`

const ContentWrapper = styled.div`
    padding: 16px;
`

const PostImage = styled.img`
    border-radius: 8px;
`   

interface IPosts {
    name: string;
    desc: string;
    image_url: string;
}

export const HomeView = () => {
    const [response, setResponse] = useState<Array<IPosts>>([]);
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
    return (
        <LayoutContent>
            <Wrapper>
            {response?.length > 0 && response.map((post, index) => {
                return (<Container key={index}>
                    <PostImage
                        src={post.image_url || 'https://placehold.co/400x200'}
                        width={400}
                        height={200}
                        alt="Picture of the author"
                    />
                    <ContentWrapper>
                        <Text>{post.name}</Text>
                        <Text>{post.desc}</Text>
                    </ContentWrapper>
                </Container>)
            })}
            </Wrapper>
        </LayoutContent>
    );
}
