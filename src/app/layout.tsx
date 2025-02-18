import Header from "@/components/Header";
import { GlobalProvider } from "@/context";

import "@/style/_global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <GlobalProvider>
          <Header />
          <main>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
