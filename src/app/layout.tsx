import Header from "@/components/Header";
import { GlobalProvider } from "@/context";

import "@/style/_global.scss";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          <main>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
