'use client';
import { ClerkProvider } from '@clerk/nextjs'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import styled from 'styled-components';

const FixedContainer = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: auto;
  flex-direction: column;
`;

export const BusinessProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const queryClient = new QueryClient()

    let signInUrl = '/sign-in';
    return (
        <ClerkProvider
            signInUrl={signInUrl}
        >
            <QueryClientProvider client={queryClient}>
                <FixedContainer>
                    {children}
                </FixedContainer>
            </QueryClientProvider>
        </ClerkProvider>
    )
}