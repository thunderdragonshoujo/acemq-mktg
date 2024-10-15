import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import MainLayout from "./main-layout"
import { GoogleAnalytics } from "@next/third-parties/google";
import { QHome } from "../sanity/lib/query";
import { client } from "../sanity/lib/client";

const inter = Inter({ subsets: ["latin"] });
const monaSans = localFont({
  src: [
    {
      path: "fonts/Mona-Sans-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Mona-Sans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});


export async function generateMetadata() {
  const res = await client.fetch(QHome);
  const home = res?.[0]    
  return {
    title: home?.meta_title || home?.title,
    description: home?.meta_description || home?.excerpt,
    alternates: {
      canonical: `https://acemq.com/`,
    },
    openGraph: {
      title:home?.meta_title || home?.title,
      description: home?.meta_description || home?.excerpt,
      url: `https://acemq.com/`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={monaSans.className}>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
      <GoogleAnalytics gaId="G-PGY6QL9T4H" />
    </html>
  );
}
