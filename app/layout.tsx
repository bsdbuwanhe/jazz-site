import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

// 正文字体
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// 标题字体 (Reid Miles 风格)
const anton = Anton({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-anton" 
});

export const metadata: Metadata = {
  title: "Blue Note Tribute",
  description: "The Finest In Jazz Since 1939",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="bg-jazz-black text-off-white antialiased">
        {children}
      </body>
    </html>
  );
}