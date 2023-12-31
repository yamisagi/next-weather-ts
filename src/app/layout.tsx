import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className + ' bg-blue-200 p-5'}>{children}</body>
    </html>
  );
}
