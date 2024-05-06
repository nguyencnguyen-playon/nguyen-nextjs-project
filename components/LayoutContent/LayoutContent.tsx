'use client'
import styled from 'styled-components';
import { Header } from '../Header';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F7FAFC;
    flex:1;
    height: 100vh;
    width: 100%;
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