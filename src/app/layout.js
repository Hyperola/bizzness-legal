import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Layout from './components/layout/Layout';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'] });

export const metadata = {
  title: 'Bizzness Legal - Business Registration & Compliance',
  description: 'Your trusted partner for business registration and compliance in Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}