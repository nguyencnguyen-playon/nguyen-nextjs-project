'use client'
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import styled, { css } from 'styled-components';

export const styles = {
  fixedContainer: css`
    display: flex;
    height: 100%;
    position: fixed;
    width: 100%;
    overflow: auto;
    flex-direction: column;
  `
};

const FixedContainer = styled.div`
  ${styles.fixedContainer}
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
