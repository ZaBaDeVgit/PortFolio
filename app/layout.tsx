import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import 'aos/dist/aos.css'; // El CSS puede quedarse aquí

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZaBaDev PortFolio',
  description: 'PortFolio by made ZaBaDeV',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}