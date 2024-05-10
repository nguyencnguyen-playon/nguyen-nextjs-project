'use client'
import Image from 'next/image'
import styled from 'styled-components';
import { Card } from 'antd';
import { IPost } from '@/interfaces';

const { Meta } = Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
`

export const PostItem = ({ item }: { item: IPost }) => (
    <Container>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" width={240} height={240} src={item.image_url || 'https://via.placeholder.com/240x240'} />}
        >
            <Meta title={item.name} description={item.desc || "Lorem ipsum"} />
        </Card>
    </Container>
)