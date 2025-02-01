import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { generateMetadata } from "./utils/metadata/layout-metadata";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const rubik = Rubik({
//   variable: "--font-rubik",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"], 
// });

// const publicSans = Public_Sans({
//   variable: "--font-public-sans",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"], 
//   style: ["normal", "italic"], 
// });

// const delius = Delius({
//   variable: "--font-delius",
//   subsets: ["latin"],
//   weight: ["400"],
//   style: ["normal"],
// });

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}












