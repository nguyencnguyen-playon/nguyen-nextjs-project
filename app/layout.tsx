'use client';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import styled from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const FixedContainer = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  width: 100%;
  overflow: auto;
  flex-direction: column;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  let signInUrl = '/sign-in';

  return (
    <ClerkProvider
      signInUrl={signInUrl}
    >
      <html>
        <body>
          <QueryClientProvider client={queryClient}>
            <FixedContainer>
              {children}
            </FixedContainer>
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
