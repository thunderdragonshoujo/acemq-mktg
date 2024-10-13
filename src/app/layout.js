import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import MainLayout from "./main-layout"
import { GoogleAnalytics } from "@next/third-parties/google";

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
