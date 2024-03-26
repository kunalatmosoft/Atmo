import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header'
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atmosoft",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <AuthContextProvider>
      <Header/>
        {children}
      </AuthContextProvider>
    </body>
  </html>
);
}
/*    <html lang="en">
      <body className={inter.className}>
     
        <main className="max-w-4xl mx-auto border p-4">    
        <Header/>
            {children}
            
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All Rights Are Reserved
            </footer>
        </main>
      
*/