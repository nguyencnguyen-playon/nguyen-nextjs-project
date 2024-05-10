import { BusinessProvider } from "@/providers";
import StyledComponentsRegistry from './registry'

import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body>
        <StyledComponentsRegistry>
          <BusinessProvider>
            {children}
          </BusinessProvider>
        </StyledComponentsRegistry>
        </body>
    </html>
  );
}
