import { Inter } from 'next/font/google';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: 'Portfolio - Kavit Desai',
  description: 'This is the portfolio of Kavit Desai. I am a Full Stack Developer and a self taught Developer too. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
