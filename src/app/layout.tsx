import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cumin QR",
    template: "%s | Cumin QR",
  },
  description: "Create & Customize your qr code.",
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
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
