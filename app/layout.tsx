'use client';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import styled from 'styled-components';


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
  let signInUrl = '/sign-in';

  return (
    <ClerkProvider
      signInUrl={signInUrl}
    >
      <html>
        <body>
          <FixedContainer>
            {children}
          </FixedContainer>
        </body>
      </html>
    </ClerkProvider>
  );
}
