import '../styles/globals.css'; // adjust path if different
import { DM_Sans } from 'next/font/google';
import Layout from '../components/Layout';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={dmSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;