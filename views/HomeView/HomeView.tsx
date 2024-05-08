'use client'
import { PaginationComponent } from '@/components';
import { LayoutContent } from '@/components/LayoutContent';
import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { IPosts } from '@/interfaces';
import { useQuery } from '@tanstack/react-query';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin: 16px;
    width: 300px;
    height: 400px;
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
    justify-content: center;
    background: #F7FAFC;
    overflow: auto;
`

const ContentWrapper = styled.div`
    padding: 16px;
`

const PostImage = styled(Image)`
    border-radius: 8px;
`   

const PaginationContainer = styled.div`
    width: 100%;
    height: 1000px;
`

const getPaginatedData = (data?: Array<IPosts>, page: number, size: number) => {
    if (!data) return { paginatedData: [], totalPages: 0 };
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const totalPages = Math.ceil(data.length / size);
    const paginatedData = data.slice(startIndex, endIndex);
    return { paginatedData, totalPages };
};

const fetchPosts = async () => {
    const posts = await fetch(`/api/views/post`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const res = await posts.json();
    return res;
}

export const HomeView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const { data, isLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

    const { paginatedData, totalPages } = getPaginatedData(data, currentPage, pageSize);


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <LayoutContent>
            <Wrapper>
                {
                    paginatedData?.length > 0 && (
                        <PaginationContainer>
                            <PaginationComponent
                                isPaginationEnabled
                                currentPage={currentPage}
                                totalPages={totalPages}
                                pageSize={pageSize}
                                data={paginatedData}
                                onChange={newPage => {
                                    setCurrentPage(newPage);
                                }}
                                onPageSizeChange={newPageSize => {
                                    setPageSize(parseInt(newPageSize));
                                    setCurrentPage(1);
                                }}
                                renderItems={(item, index) => {
                                    return (
                                        <Container key={index}>
                                            <PostImage
                                                src={item.image_url || 'https://via.placeholder.com/300x300'}
                                                width={300}
                                                height={300}
                                                alt="Picture of the author"
                                            />
                                            <ContentWrapper>
                                                <Text>{item.name}</Text>
                                                <Text>{item.desc}</Text>
                                            </ContentWrapper>
                                        </Container>
                                    )
                                }}
                            >
                            </PaginationComponent>
                        </PaginationContainer>
                    )
                }
            </Wrapper>
        </LayoutContent>
    );
}
