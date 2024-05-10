'use client'
import { PaginationComponent } from '@/components';
import { LayoutContent } from '@/components/LayoutContent';
import { useState } from 'react'
import styled from 'styled-components';
import { fetchPosts } from '@/services';
import * as SERVICE_CONSTANTS from '@/services/constants';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { PostItem } from '@/components/PaginationComponent/PostItem/PostItem';
import { getPaginatedData } from '@/utils/helpers';

const Wrapper = styled.div`
    display: flex;  
    flex:1;
    flex-wrap: wrap;
    justify-content: center;
    background: #F7FAFC;
    overflow: auto;
`

const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: fit-content;
    overflow: auto;
`

export const HomeView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { data, isLoading } = useQuery({ queryKey: [SERVICE_CONSTANTS.POST_QUERY_KEY], queryFn: fetchPosts })

    const { paginatedData, totalPages } = getPaginatedData(data, currentPage, pageSize);

    return (
        <LayoutContent>
            <Wrapper>
                {isLoading ? <Spin size="large" /> :
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
                                renderItems={(item, index) => <PostItem key={index} item={item} />}
                            >
                            </PaginationComponent>
                        </PaginationContainer>
                    )
                }
            </Wrapper>
        </LayoutContent>
    );
}
