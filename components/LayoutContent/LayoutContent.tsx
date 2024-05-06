'use client'
import styled from 'styled-components';
import { Header } from '../Header';

const Container = styled.div`
    display: flex;
    background: #F7FAFC;
    flex: 1;
`

export const LayoutContent = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
        </>
    )
}