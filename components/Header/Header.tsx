import { SignedIn, UserButton, useUser, useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    return (
        <HeaderContainer>
            <HelloText>{`Hello ${user?.emailAddresses[0]?.emailAddress || ''}`}</HelloText>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <ButtonContainer>
                <LinkButton href='/'>Home</LinkButton>
                {user && (<LinkButton href='/create-posts'>Create Posts</LinkButton>)}
                {!user ? <LinkButton href="/sign-in/">Sign In</LinkButton> : <Button onClick={() => signOut()}>Sign Out</Button>}
            </ButtonContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #2D3748;
    flex-wrap: wrap;
`;

const HelloText = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
`;

const LinkButton = styled(Link)`
    padding: 8px 16px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
