import { Inter } from "next/font/google";
import "./globals.css";
import NavApp from "@/components/Navbar";



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row bg-gray-500 p-1 overflow-x-hidden overflow-y-hidden`} >
        <NavApp/>
        {children}</body>
    </html>
  );
}
