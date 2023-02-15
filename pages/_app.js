import Loading from '@/components/Loading';
import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import Layout from '../layout'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the page
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (

    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      )}
    </div>
  )
}
